import { Link } from "react-router-dom"

export const Links = ({ children, variant, widthFull, icon, iconOnly, url }) => {
    return (
        <Link
            to={url}
            className={`${variant === 'primary-outline' ? 'border-[1px] border-white text-white hover:border-green-500 hover:bg-green-500 hover:text-black' : variant === 'primary-black' ? 'bg-black text-white hover:bg-white hover:text-black' : variant === 'default' ? 'bg-white text-black hover:bg-green-500 hover:text-black' : ''} p-[10px] rounded-lg font-body ${widthFull ? 'w-[210px]' : 'w-fit'} `}
        >
            {iconOnly ? icon
                :
                <div>
                    {icon}
                    {<span className="mr-[10px]">{children}</span>}
                </div>}
        </Link>
    )
}