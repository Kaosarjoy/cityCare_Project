import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceLocations = useLoaderData();

  return (
    <div className="w-full min-h-screen bg-[#0f172a] p-6">

      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white">
          We are available in the following areas
        </h2>
        <p className="text-gray-400 mt-2">
          Explore coverage across districts & cities
        </p>
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[650px] w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceLocations?.map((location, index) => (
            location?.latitude && location?.longitude && (
              <Marker
                key={index}
                position={[location.latitude, location.longitude]}
              >
                <Popup>
                  <div className="text-black space-y-1">
                    <h3 className="font-bold text-lg">
                      {location.city}
                    </h3>

                    <p>
                      <span className="font-semibold">Region:</span>{" "}
                      {location.region}
                    </p>

                    <p>
                      <span className="font-semibold">District:</span>{" "}
                      {location.district}
                    </p>

                    <p className="text-sm text-gray-600">
                      Covered Areas: {location.covered_area?.join(", ")}
                    </p>

                    <p className="text-xs text-green-600 font-semibold">
                      Status: {location.status}
                    </p>
                  </div>
                </Popup>
              </Marker>
            )
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;