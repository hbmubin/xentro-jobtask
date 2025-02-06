import { useLoaderData } from "react-router-dom";
import profileImg from "../../assets/user-man.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className=" bg-white p-6 rounded-md grid grid-cols-2 gap-x-3">
      <div className="flex justify-center flex-col items-center bg-bgGray rounded-xl py-10 px-4">
        <figure className="rounded-full size-36 ring-2 ring-orange-200 overflow-hidden">
          <img className="w-full h-full object-cover" src={profileImg} alt="profile" />
        </figure>
        <div className=" p-3  w-full">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3 mb-6 text-base">
            <div className="flex items-center">
              <label className="text-neutral-700 font-medium mr-2">Username:</label>
              <div className="text-gray-800">{user.username}</div>
            </div>
            <div className="flex items-center">
              <label className="text-neutral-700 font-medium mr-2">Email:</label>
              <div className="text-gray-800">{user.email}</div>
            </div>
            <div className="flex items-center">
              <label className="text-neutral-700 font-medium mr-2">Phone:</label>
              <div className="text-gray-800">{user.phone}</div>
            </div>
            <div className="flex items-center">
              <label className="text-neutral-700 font-medium mr-2">Website:</label>
              <a href="#" className="text-blue-600 hover:underline">
                {user.website}
              </a>
            </div>
          </div>

          <div>
            <div className="text-lg font-medium text-gray-800 mb-2">Company</div>
            <div className="text-gray-800">{user.company.name}</div>
            <div className="text-gray-600 italic">{user.company.catchPhrase}</div>
            <div className="text-gray-600">{user.company.bs}</div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div>
            <label  className="text-neutral-700">Address:</label>
            <address>
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </address>
        </div>
      <article
          className="mapCard relative  mt-3"
        >
          <MapContainer
            center={[user.address.geo.lat, user.address.geo.lng]}
            zoom={13}
            scrollWheelZoom={false}
            className="aspect-video w-full rounded-2xl overflow-hidden ring ring-orange-200"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[user.address.geo.lat, user.address.geo.lng]}>
              <Popup>
                Banna lives here. <br /> come here for a cuppa.
              </Popup>
            </Marker>
          </MapContainer>
        </article>
      </div>
    </div>
  );
};

export default UserDetails;
