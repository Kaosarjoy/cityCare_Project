import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useState } from "react";


const Coverage = () => {
  const serviceLocations = useLoaderData();
  const [search, setSearch] = useState("");

  // search filter (safe)
  const filteredLocations = serviceLocations?.filter((loc) => {
   const keyword = search.toLowerCase();
  // const keyword = search.toUpperCase();

    return (
      loc?.city?.toLowerCase().includes(keyword) ||
      loc?.district?.toLowerCase().includes(keyword) ||
      loc?.region?.toLowerCase().includes(keyword)
    );
  }) || [];

  return (
    <div className="w-full min-h-screen bg-[#0f172a] rounded-2xl p-6">

      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white">
          Coverage Areas
        </h2>
        <p className="text-gray-400 mt-2">
          Search by city, district or region
        </p>
      </div>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:border-blue-500"
        />
        
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
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredLocations.map((location, index) => (
            location?.latitude && location?.longitude && (
              <Marker
                key={index}
                position={[location.latitude, location.longitude]}
              >
                <Popup>
                  <div className="text-black">
                    <h2 className="font-bold text-lg text-black">
                      {location.city}
                    </h2>
                    <p className="font-light text-sm text-black">{location.region}</p>
                    <p className="font-extralight text-sm text-accent">
                        {location.covered_area.join(", ")}
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