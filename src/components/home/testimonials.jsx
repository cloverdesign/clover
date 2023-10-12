import { TestimonialsData } from "../../data/testimonialsData";

export const Testimonials = () => {

    return (
        <section className="flex lg:flex-row flex-col gap-40 items-center justify-center text-black h-screen bg-green-500">
            <div className="space-y-3">
                <h2 className="text-5xl lg:text-7xl">The talk of <br /> the town!</h2>
                <p className="text-xl">Hear what our clients say about us.</p>
            </div>

            <div className="space-y-8 relative lg:w-[700px] w-[300px] min-h-[400px]">
                {
                    TestimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} title={testimonial.title} company={testimonial.company} text={testimonial.text} />
                    ))
                }
            </div>

        </section >
    )
}

export const TestimonialCard = ({ title, company, text }) => {

    return (
        <div className="left-0 top-0 absolute hover:cursor-grab flex flex-col justify-center lg:w-[700px] w-[300px] lg:px-20 px-6 py-8 min-h-[300px] 
                        review-card bg-black text-white rounded-xl rotate-2"
        >
            <p className="font-bold">{title} - <span className="font-bold">{company}</span></p>
            <p className="text-sm">"{text}"</p>
        </div>
    )
}