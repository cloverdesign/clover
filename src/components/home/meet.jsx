import img from '../../assets/meet.png'
import * as Icon from 'react-icons/hi'
import { Links } from '../global/links'

export const Meet = () => {
    return (
        <section className='lg:px-12 px-5 rounded lg:leading-[80px] flex items-center'>
            <div>
                <h1>* who stands behind your <br /> <span className='italic text-green-500'>amazing</span> designs?</h1>
                <span className="flex items-center gap-4">
                    <p>Meet the team</p>
                    <Links url="/about/the-team" icon={<Icon.HiArrowRight className='lg:text-base text-[8px]' />} variant="primary-outline" />
                </span>
            </div>
            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className='w-full h-[680px] rounded-xl overflow-hidden'
            >
            </div>
        </section>
    )
}