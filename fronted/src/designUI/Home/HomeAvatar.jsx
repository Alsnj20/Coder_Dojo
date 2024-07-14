function HomeAvatar() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
        <i className={`text-2xl rounded-full hover:bg-white hover:text-[#0b2d5f] bx bx-user`}></i>
      </div>
      <div>
        <p className="font-medium">John Doe</p>
        <p className="text-gray-500 text-sm">Teacher</p>
      </div>
    </div>
  );
}
export default HomeAvatar;