const ResetBtn = () => {
  const pageReload = () => {
    location.reload();
  };
  return (
    <button
      className="text-white font-bold text-3xl border border-solid border-white rounded-md p-2"
      onClick={() => {
        pageReload();
      }}
    >
      Reset
    </button>
  );
};

export default ResetBtn;
