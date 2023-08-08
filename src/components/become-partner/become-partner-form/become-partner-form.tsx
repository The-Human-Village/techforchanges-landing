import { useCreateServiceProviderMutation } from '@/api/hooks/useCreateServiceProviderMutation'
import { useTranslations } from '@/api/hooks/useTranslations'
import { DimensionCheckbox } from '@/components/become-partner/become-partner-form/dimension-checkbox/dimension-checkbox'
import { FormErrorMessage } from '@/components/utilities/form-error-message/form-error-message'
import { Select } from '@/components/utilities/select/select'
import type {
  ICity,
  ICountry,
  IDimension,
  ILanguage,
  Option,
  ServiceProviderDto,
} from '@/types/index'
import { ContactOption } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { getTranslationText } from '@/utilities/translations'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import { components } from 'react-select'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

export const becomePartnerSchema = z
  .object({
    dimensions: z.string().array().nonempty({
      message: 'This field is required',
    }),
    cities: z.string().array().nonempty({
      message: 'This field is required',
    }),
    language: z.string().array().nonempty({
      message: 'This field is required',
    }),
    name: z.string().min(1, { message: 'This field is required' }),
    contact: z.string().min(1, { message: 'This field is required' }),
    countryCode: z.string().min(1, { message: 'This field is required' }),
    sign_up_message: z
      .string()
      .trim()
      .min(1, { message: 'This field is required' }),
    telephone_number: z.string().optional(),
    email: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.contact === ContactOption.TELEPHONE_NUMBER &&
      !data.telephone_number?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['telephone_number'],
        message: 'This field is required',
      })
    } else if (data.contact == 'email') {
      const result = z.object({ email: z.string().email() }).safeParse(data)
      if (result.success == false) {
        result.error.errors.forEach((issue) => ctx.addIssue(issue))
      }
    }
  })

export type BecomePartnerDto = z.infer<typeof becomePartnerSchema>

const OptionLabelCountryCode = (props) => {
  const { data } = props
  return (
    <components.Option {...props}>
      <Flex alignItems="center" gap={pxToRem(8)}>
        <Image
          src={data?.flag?.url}
          alt={`${data.label} flag`}
          w={pxToRem(24)}
          h={pxToRem(16)}
        />
        <Text ml={pxToRem(4)}>{data.label}</Text>
        <Text>{data.mobile_prefix}</Text>
      </Flex>
    </components.Option>
  )
}

const OptionLabelLanguage = (props) => {
  const { data, isSelected, ...rest } = props

  const handleOnChange = () => {
    rest.selectOption(data)
  }

  return (
    <components.Option {...rest}>
      <Flex alignItems="center" gap={pxToRem(8)}>
        <Checkbox isChecked={isSelected} onChange={handleOnChange}>
          {data.label}
        </Checkbox>
      </Flex>
    </components.Option>
  )
}

const SingleValueCountryCode = (props) => {
  const { data } = props
  return (
    <components.SingleValue {...props}>
      <Flex alignItems="center" gap={pxToRem(8)}>
        <Image
          src={data?.flag?.url}
          alt={`${data.label} flag`}
          w={pxToRem(24)}
          h={pxToRem(16)}
        />
        <Text>{data.mobile_prefix}</Text>
      </Flex>
    </components.SingleValue>
  )
}

export type Props = {
  dimensions: IDimension[]
  cities: ICity[]
  languages: ILanguage[]
  countries: ICountry[]
  title: string
}

export const BecomePartnerForm = ({
  dimensions,
  cities,
  languages,
  countries,
  title,
}: Props) => {
  const countryCodeOptions = useMemo<Option[]>(() => {
    return countries?.map((country) => ({
      value: country?.mobile_prefix,
      label: country?.title,
      mobile_prefix: country?.mobile_prefix,
      flag: country?.flag,
    })) as Option[]
  }, [countries])
  const { data: translations } = useTranslations()

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    control,
    watch,
  } = useForm<BecomePartnerDto>({
    mode: 'onBlur',
    resolver: zodResolver(becomePartnerSchema),
    defaultValues: {
      cities: [],
      dimensions: [],
      contact: 'email',
      language: [],
      countryCode: countryCodeOptions && countryCodeOptions[0]?.value,
    },
  })

  const createServiceProviderMutation = useCreateServiceProviderMutation()

  const selectedContact = watch('contact')

  const cityOptions = useMemo<Option[]>(() => {
    return cities?.map(({ id, title }) => ({
      value: id.toString(),
      label: title,
    })) as Option[]
  }, [cities])

  const languageOptions = useMemo<Option[]>(() => {
    return languages?.map(({ id, title }) => ({
      value: id.toString(),
      label: title,
    })) as Option[]
  }, [languages])

  const contactOptions = useMemo<Option[]>(() => {
    return [
      {
        value: ContactOption.EMAIL,
        label: getTranslationText(translations, 'landing-email'),
      },
      {
        value: ContactOption.TELEPHONE_NUMBER,
        label: getTranslationText(translations, 'landing-phone-number'),
      },
    ]
  }, [translations])

  const onSubmit: SubmitHandler<BecomePartnerDto> = (values) => {
    const {
      name,
      language,
      dimensions,
      sign_up_message,
      cities,
      contact,
      email,
      countryCode,
      telephone_number,
    } = values
    const serviceProvider: ServiceProviderDto = {
      data: {
        title: name,
        uid: uuidv4(),
        languages: language,
        dimensions: dimensions,
        verified: false,
        active: false,
        sign_up_message: sign_up_message,
        cities: cities,
        email: contact === 'email' ? email : null,
        telephone_number:
          contact === 'telephone_number'
            ? `${countryCode}${telephone_number}`
            : null,
      },
    }
    createServiceProviderMutation.mutate(serviceProvider)
  }

  return (
    <Box
      as="section"
      bg="white.100"
      px={{ base: pxToRem(16), lg: pxToRem(100) }}
      py={{ base: pxToRem(40), lg: pxToRem(100) }}
    >
      <Flex
        maxW={pxToRem(800)}
        m="0 auto"
        flexDir="column"
        px={{ base: pxToRem(16), lg: pxToRem(80) }}
        py={{ base: pxToRem(40), lg: pxToRem(80) }}
        bg="white"
        borderRadius={pxToRem(16)}
      >
        <Text
          fontSize={pxToRem(20)}
          lineHeight={pxToRem(28)}
          fontWeight={700}
          mb={pxToRem(8)}
          color="gray.800"
        >
          {title}
        </Text>
        <Text color="gray.500" mb={{ base: pxToRem(40), lg: pxToRem(80) }}>
          {getTranslationText(translations, 'landing-mandatory-fields-note')}
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir="column" gap={{ base: pxToRem(56), lg: pxToRem(64) }}>
            <FormControl isInvalid={!!errors?.dimensions} isRequired>
              <FormLabel>
                {getTranslationText(
                  translations,
                  'landing-select-your-interests',
                )}
              </FormLabel>
              <FormHelperText>
                {getTranslationText(
                  translations,
                  'landing-select-your-interests-note',
                )}
              </FormHelperText>
              <Controller
                control={control}
                name="dimensions"
                render={({ field: { onChange, value } }) => (
                  <DimensionCheckbox
                    name="dimensions"
                    onChange={onChange}
                    value={value}
                    dimensions={dimensions}
                  />
                )}
              />

              <FormErrorMessage>{errors?.dimensions?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!errors?.cities}
              isRequired
              maxW={{ base: '100%', lg: pxToRem(400) }}
            >
              <FormLabel htmlFor="cities">
                {getTranslationText(
                  translations,
                  'landing-select-your-location-label',
                )}
              </FormLabel>
              <FormHelperText>
                {getTranslationText(
                  translations,
                  'landing-select-your-location-note',
                )}
              </FormHelperText>
              <Controller
                control={control}
                name="cities"
                render={({ field: { onChange, onBlur, value: uids } }) => (
                  <Select
                    id="cities"
                    onChange={(selectedOptions: Option[]) => {
                      const selectedValues = selectedOptions.map(
                        (option) => option.value,
                      )
                      onChange(selectedValues)
                    }}
                    onBlur={onBlur}
                    value={cityOptions?.filter((option) =>
                      uids?.includes(option.value),
                    )}
                    options={cityOptions}
                    placeholder={getTranslationText(
                      translations,
                      'landing-city-placeholder',
                    )}
                    isInvalid={!!errors?.cities}
                    isMulti={true}
                  />
                )}
              />
              <FormErrorMessage>{errors?.cities?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!errors?.language}
              isRequired
              maxW={{ base: '100%', lg: pxToRem(400) }}
            >
              <FormLabel htmlFor="language">
                {getTranslationText(
                  translations,
                  'landing-select-your-language-label',
                )}
              </FormLabel>
              <FormHelperText>
                {getTranslationText(
                  translations,
                  'landing-select-your-language-note',
                )}
              </FormHelperText>
              <Controller
                control={control}
                name="language"
                render={({ field: { onChange, onBlur, value: uids } }) => (
                  <Select
                    id="language"
                    onChange={(selectedOptions: Option[]) => {
                      const selectedValues = selectedOptions.map(
                        (option) => option.value,
                      )
                      onChange(selectedValues)
                    }}
                    onBlur={onBlur}
                    value={languageOptions?.filter((option) =>
                      uids?.includes(option.value),
                    )}
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    options={languageOptions}
                    placeholder={getTranslationText(
                      translations,
                      'landing-language-placeholder',
                    )}
                    components={{
                      Option: OptionLabelLanguage,
                    }}
                    isMulti={true}
                    isInvalid={!!errors?.language}
                  />
                )}
              />
              <FormErrorMessage>{errors?.language?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!errors?.name}
              isRequired
              maxW={{ base: '100%', lg: pxToRem(400) }}
            >
              <FormLabel htmlFor="name">
                {getTranslationText(translations, 'landing-name-label')}
              </FormLabel>
              <FormHelperText>
                {getTranslationText(translations, 'landing-name-note')}
              </FormHelperText>
              <Input id="name" {...register('name')} />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>

            <Flex flexDir="column" gap={pxToRem(16)}>
              <FormControl
                isInvalid={!!errors?.contact}
                isRequired
                maxW={{ base: '100%', lg: pxToRem(400) }}
              >
                <FormLabel htmlFor="contact">
                  {getTranslationText(translations, 'landing-contact-label')}
                </FormLabel>
                <FormHelperText>
                  {getTranslationText(translations, 'landing-contact-note')}
                </FormHelperText>
                <Controller
                  control={control}
                  name="contact"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select
                      id="contact"
                      onChange={(selectedOption: Option) =>
                        onChange(selectedOption.value)
                      }
                      onBlur={onBlur}
                      value={contactOptions.find(
                        (option) => option.value === value,
                      )}
                      options={contactOptions}
                      placeholder={getTranslationText(
                        translations,
                        'landing-contact-placeholder',
                      )}
                      isInvalid={!!errors?.contact}
                      isSearchable={false}
                    />
                  )}
                />
                <FormErrorMessage>{errors?.contact?.message}</FormErrorMessage>
              </FormControl>

              {selectedContact === 'email' && (
                <FormControl
                  isInvalid={!!errors?.email}
                  maxW={{ base: '100%', lg: pxToRem(400) }}
                >
                  <Input
                    id="email"
                    {...register('email')}
                    placeholder={getTranslationText(
                      translations,
                      'landing-enter-email-address',
                    )}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
              )}

              {selectedContact === ContactOption.TELEPHONE_NUMBER && (
                <Flex gap={pxToRem(8)}>
                  <FormControl
                    isInvalid={!!errors?.countryCode}
                    isRequired
                    w={pxToRem(141)}
                  >
                    <Controller
                      control={control}
                      name="countryCode"
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Select
                          id="countryCode"
                          onChange={(selectedOption: Option) =>
                            onChange(selectedOption.value)
                          }
                          onBlur={onBlur}
                          value={countryCodeOptions.find(
                            (option) => option.value === value,
                          )}
                          options={countryCodeOptions}
                          components={{
                            Option: OptionLabelCountryCode,
                            SingleValue: SingleValueCountryCode,
                          }}
                          isInvalid={!!errors?.countryCode}
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors?.telephone_number}
                    maxW={{ base: '100%', lg: pxToRem(251) }}
                  >
                    <Input
                      id="telephone_number"
                      {...register('telephone_number')}
                    />
                    <FormErrorMessage>
                      {errors?.telephone_number?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
              )}
            </Flex>

            <FormControl isInvalid={!!errors?.sign_up_message} isRequired>
              <FormLabel htmlFor="message">
                {getTranslationText(translations, 'landing-message-label')}
              </FormLabel>
              <FormHelperText>
                {getTranslationText(translations, 'landing-message-note')}
              </FormHelperText>
              <Textarea
                id="message"
                {...register('sign_up_message')}
                placeholder={getTranslationText(
                  translations,
                  'landing-message-placeholder',
                )}
                h={pxToRem(200)}
              />
              <FormErrorMessage>
                {errors?.sign_up_message?.message}
              </FormErrorMessage>
            </FormControl>
            <Box mt={{ lg: pxToRem(16) }}>
              <Text mb={pxToRem(24)} color="gray.800">
                {getTranslationText(translations, 'landing-form-note1')}
              </Text>
              <Text color="gray.800">
                {getTranslationText(translations, 'landing-form-note2')}
              </Text>
            </Box>

            <Flex justifyContent="flex-end">
              <Button
                type="submit"
                variant="primary"
                fontSize={pxToRem(18)}
                lineHeight={pxToRem(28)}
                px={pxToRem(48)}
                py={pxToRem(24)}
                isDisabled={!isValid || isSubmitting}
              >
                {getTranslationText(translations, 'landing-form-send-btn')}
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Box>
  )
}
