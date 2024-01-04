import prime from '../../assets/about/prime.jpg'
import img2 from '../../assets/about/2.jpg'
import img3 from '../../assets/about/3.jpg'
export const PictureHeader = () => {
    return (
        <section className='flex relative overflow-x-hidden gap-4'>
            <div className='animate-marquee flex gap-4 h-fit'>
                <Picture img={prime} classNames="-mt-10" />
                <Picture img={img2} classNames="mt-10" />
                <Picture img={img3} classNames="-mt-10" />
                <Picture img={prime} classNames="mt-10" />
                <Picture img={prime} classNames="-mt-10" />
            </div>
            <div className='absolute pl-4 top-0 animate-marquee2 flex gap-4 h-fit'>
                <Picture img={prime} classNames="mt-10" />
                <Picture img={img2} classNames="-mt-10" />
                <Picture img={img3} classNames="mt-10" />
                <Picture img={prime} classNames="-mt-10" />
                <Picture img={prime} classNames="mt-10" />
            </div>
        </section>
    )
}

const Picture = ({ img, classNames }) => {
    return (
        <div className={`w-[150px] lg:w-[300px] h-[400px] rounded-xl overflow-hidden ${classNames}`}>
            <img src={img} alt="" />
        </div>
    )
}