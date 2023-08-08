import { LocationPin } from '@/components/utilities/icon/icon'
import { pxToRem } from '@/utilities/pxToRem'
import { Box } from '@chakra-ui/react'
import GoogleMapReact from 'google-map-react'

const pinLocations = [
  { lat: 32.794046, lng: 34.989571 },
  { lat: 31.964211, lng: 34.80479 },
  { lat: 31.25181, lng: 34.791302 },
]

const options = {
  draggable: false, // Disable map dragging
  clickableIcons: false, // Disable clickable icons on the map
  zoomControl: false, // Disable zoom control
}

const Pin = ({ lat, lng }) => (
  <LocationPin w={pxToRem(30)} h={pxToRem(30)} color="blue.800" />
)

export const Map = () => {
  return (
    <Box w="full" h={pxToRem(670)}>
      <GoogleMapReact
        zoom={7}
        bootstrapURLKeys={{ key: process.env.NEXT_GOOGLE_API_KEY }}
        center={pinLocations[0]}
        options={options}
      >
        {pinLocations.map((pinLocation, index) => (
          <Pin lat={pinLocation.lat} lng={pinLocation.lng} key={index} />
        ))}
      </GoogleMapReact>
    </Box>
  )
}
