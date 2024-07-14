import HomeAvatar from "./HomeAvatar";

function EventCard({ title, children, user }) {
  return (
    <div className="border border-gray-300 dark:bg-text-dark rounded-md shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-primary-dark dark:text-primary-dark text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{children}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <HomeAvatar />
          <a
            href="#"
            className="bg-primary-light text-white px-4 py-2 rounded-md hover:bg-primary-dark flex items-center gap-2"
          >
            <i className="bx bx-plus"></i>
            Unirse
          </a>
        </div>
      </div>
    </div>
  );
}
export default EventCard;