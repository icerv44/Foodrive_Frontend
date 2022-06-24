function UserChat({ title }) {
  return (
    <div className="h-10 px-2 flex items-center justify-end">
      <div
        className="p-3 rounded-lg px-5 text-white font-semibold"
        style={{
          background:
            "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default UserChat;
