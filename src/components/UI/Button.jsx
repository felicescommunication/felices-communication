export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`self-start bg-[#54001A] text-[#F4EFC9] px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-['TitanOne'] text-base md:text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#FFCFF5] hover:text-[#031E39] hover:scale-105 -mt-5 ${className}`}
    >
      {children}
    </button>
  )
}