function SelectLevel({ setlevel }: { setlevel: (level: string) => void }) {
  const selectLevel = ["Easy", "Medium", "Hard"];
  return (
    <>
      <h1>Choose the levels</h1>
      <div className="flex gap-4 ">
        {selectLevel.map((mode) => (
          <button
            onClick={() => setlevel(mode)}
            className="flex rounded-sm border-4 items-center justify-center border-b-mauve-500 h-30 w-30"
          >
            <h2 className="text-2xl">{mode}</h2>
          </button>
        ))}
      </div>
    </>
  );
}

export default SelectLevel;
