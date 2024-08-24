'use client'

const Button = ({ onClick, children, className }: any) => (
  <button
    onClick={onClick}
    type="button"
    className={`cursor-pointer bg-[#d1f121] text-[#191919] border border-[#191919] hover:bg-[#191919] hover:text-[#d1f121] font-light leading-normal text-ock-inverse inline-flex min-w-[50px] uppercase transition-all duration-700 items-center justify-center rounded-md p-2 text-sm ${className}`}
  >
    {children}
  </button>
)

export default Button
