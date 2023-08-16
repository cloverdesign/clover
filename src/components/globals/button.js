export const Button = ({ children, variant, widthFull }) => {
    return (
        <button className={`${variant === 'primary-outline' ? 'border-[1px] border-white text-white hover:border-green-500' : 'bg-white text-black'} p-[10px] rounded-lg font-body ${widthFull ? 'w-[210px]' : 'w-fit'} hover:bg-green-500 hover:text-black`}>
            {children}
        </button>
    )
}