import React from 'react'
import Card from '../components/Card/Card'

const cosmeticItems = [
    {
        id: 601,
        brand: 'Acne Scar Cream',
        imgSrc: '/Images/Cosmetics/AcneScarCream.png',
        price: 18,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 602,
        brand: 'Axe Deodorant Dry Bodyspray',
        imgSrc: '/Images/Cosmetics/AxeDeodorantDryBodyspray.png',
        price: 17,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 603,
        brand: 'Dove White Beauty Soap Bar',
        imgSrc: '/Images/Cosmetics/DoveSoap.png',
        price: 19,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 604,
        brand: 'Eye Shadow Palette',
        imgSrc: '/Images/Cosmetics/EyeShadowPalette.png',
        price: 12,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 605,
        brand: 'Dettol Liquid Handwash',
        imgSrc: '/Images/Cosmetics/DettolLiquidHandwash.png',
        price: 35,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 606,
        brand: 'Vasline Pure Petroleum Jelly',
        imgSrc: '/Images/Cosmetics/Vasline.png',
        price: 15,
        discount: 17,
        rating: 4,
        numRatings: 100
    },
    {
        id: 607,
        brand: 'Glow9 Body Lotion',
        imgSrc: '/Images/Cosmetics/Glow9BodyLotion.png',
        price: 45,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 608,
        brand: 'Pantene Hair-Fall Control Shampoo',
        imgSrc: '/Images/Cosmetics/PanteneShampoo.png',
        price: 24,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 609,
        brand: 'Makeup Brush Kit',
        imgSrc: '/Images/Cosmetics/MakeupBrushKit.png',
        price: 50,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 610,
        brand: 'Jason Dry Spray Deodorant',
        imgSrc: '/Images/Cosmetics/JasonDrySprayDeodorant.png',
        price: 10,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 611,
        brand: 'Hair Removal Shower Cream',
        imgSrc: '/Images/Cosmetics/HairRemovalCream.png',
        price: 18,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 612,
        brand: 'Nivea Baby Smoothy Cream',
        imgSrc: '/Images/Cosmetics/NiveaBabySmoothyCream.png',
        price: 22,
        discount: 18,
        rating: 4,
        numRatings: 100
    },
    {
        id: 613,
        brand: 'Cardinal Luxury Purfume',
        imgSrc: '/Images/Cosmetics/HudhudLuxuryPurfume.png',
        price: 47,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 614,
        brand: 'Dettol Hand Sanitizer Pack',
        imgSrc: '/Images/Cosmetics/DettolSanitizerPack.png',
        price: 100,
        discount: 23,
        rating: 4,
        numRatings: 100
    },
    {
        id: 615,
        brand: 'MakeUp Majestic Palette Box',
        imgSrc: '/Images/Cosmetics/MakeUpMajesticPaletteBox.png',
        price: 200,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 616,
        brand: 'NYX FitMe Foundation',
        imgSrc: '/Images/Cosmetics/NYXFitMeFoundation.png',
        price: 32,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 617,
        brand: 'Colgate Teeth & Cavity Protection Pack',
        imgSrc: '/Images/Cosmetics/ColgateStrongTeethCavityProtectionPack.png',
        price: 120,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 618,
        brand: 'Tomboy Eye Shadow Palette',
        imgSrc: '/Images/Cosmetics/TomboyEyeShadowPalette.png',
        price: 155,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 619,
        brand: 'Maybelline NY Hypercurl Mascara',
        imgSrc: '/Images/Cosmetics/MaybellineNYHypercurlMascara.png',
        price: 60,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 620,
        brand: 'FoggPerfume',
        imgSrc: '/Images/Cosmetics/FoggPerfume.png',
        price: 25,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
    {
        id: 621,
        brand: 'Younique Hot Lipstick',
        imgSrc: '/Images/Cosmetics/YouniqueLipstick.png',
        price: 25,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 622,
        brand: 'Dettol Intense Cool Bathing Soap Bar',
        imgSrc: '/Images/Cosmetics/DettolIntenseCoolBathingSoapBar.png',
        price: 25,
        discount: 45,
        rating: 4,
        numRatings: 100
    },
    {
        id: 623,
        brand: 'Elegence Strong Hair Gel',
        imgSrc: '/Images/Cosmetics/ElegenceStrongHairGel.png',
        price: 80,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 624,
        brand: 'Nycil Refreshing Deodorizing Powder',
        imgSrc: '/Images/Cosmetics/NycilCoolPowderSandalWoodFragrance.png',
        price: 28,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
]

const Cosmetics = ({ addToCartHandler }) => {
  return (
      <div className=' bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {cosmeticItems.map(item =>
              <Card
                  key={item.id}
                  item={item}
                  addToCartHandler={addToCartHandler}
              />)}
      </div>
  )
}

export default Cosmetics