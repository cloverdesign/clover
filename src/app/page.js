import { Button } from '@/components/globals/button'

export default function Home() {
  return (
    <main className="">
      <section className="hero relative w-[100vw] flex flex-col items-center overflow-x-hidden justify-center space-y-6" id="home">
        <svg className="absolute right-0 lg:block hidden" width="348" height="624" viewBox="0 0 348 624" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_72)">
            <path d="M564.52 568.221L481.262 623.462L348.325 414.911L348 414.402L347.675 414.911L214.745 623.462L131.48 568.221L167.787 483.168L168.368 481.805L167.197 482.712L91.2018 541.53L0.529054 481.404L95.9264 332.938L207.008 312.16L207.006 311.403L99.2823 291.769L6.29926 136.092L96.1303 80.5258L166.451 134.68L167.388 135.402L167.055 134.267L142.816 51.5756L225.253 0.534097L347.669 207.315L348 207.874L348.331 207.315L470.747 0.534084L553.184 51.5756L528.945 134.267L528.612 135.402L529.549 134.68L599.87 80.5258L689.701 136.092L596.625 291.769L488.994 311.403L488.992 312.16L600.081 332.938L695.471 481.404L604.806 541.53L528.803 482.712L527.632 481.806L528.213 483.168L564.52 568.221Z" stroke="#97FF80" strokeWidth="0.770026" />
          </g>
          <defs>
            <clipPath id="clip0_305_72">
              <rect width="348" height="624" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg className="lg:hidden absolute my-auto mx-0" width="696" height="624" viewBox="0 0 696 624" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M564.52 568.221L481.262 623.462L348.325 414.911L348 414.402L347.675 414.911L214.745 623.462L131.48 568.221L167.787 483.168L168.368 481.805L167.197 482.712L91.2018 541.53L0.529054 481.404L95.9264 332.938L207.008 312.16L207.006 311.403L99.2823 291.769L6.29926 136.092L96.1303 80.5258L166.451 134.68L167.388 135.402L167.055 134.267L142.816 51.5756L225.253 0.534097L347.669 207.315L348 207.874L348.331 207.315L470.747 0.534084L553.184 51.5756L528.945 134.267L528.612 135.402L529.549 134.68L599.87 80.5258L689.701 136.092L596.625 291.769L488.994 311.403L488.992 312.16L600.081 332.938L695.471 481.404L604.806 541.53L528.803 482.712L527.632 481.806L528.213 483.168L564.52 568.221Z" stroke="#97FF80" strokeWidth="0.770026" />
        </svg>
        <h1 className='text-center lg:text-right'>crafting timeless designs, <br />one pixel at a time.</h1>
        <Button children="Get Started" variant="primary-outline" widthFull />
      </section>
      <section id="work">
        <div class="works-head">
          <h2>Works</h2>
          <div class="works-cta">
            View Projects
            <button class="go-btn">
              <svg width="13" height="11" viewBox="0 0 13 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.761982 4.79477H7.66093L10.8307 5.02785V6.28644L7.66093 6.53505H0.761982V4.79477ZM7.72308 0.894694L12.3379 5.66491L7.72308 10.4351L6.57325 9.33192L10.8618 4.98123V6.34859L6.57325 1.9979L7.72308 0.894694Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
