import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { SmoothScroll } from './components/motion/SmoothScroll';
import { IntroExperience } from './components/layout/IntroExperience';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';

// Home Sections
import { Hero } from './components/home/Hero';
import { NewArrivals } from './components/home/NewArrivals';
import { EditorialSplit } from './components/home/EditorialSplit';
import { ShopGenderSplit } from './components/home/ShopGenderSplit';
import { FeaturedCollection } from './components/home/FeaturedCollection';
import { HorizontalLookbook } from './components/home/HorizontalLookbook';
import { BrandStory } from './components/home/BrandStory';
import { CampaignFilm } from './components/home/CampaignFilm';
import { CategoryGrid } from './components/home/CategoryGrid';
import { InstagramFeed } from './components/home/InstagramFeed';
import { Newsletter } from './components/home/Newsletter';

// Views
import { ShopView } from './components/views/ShopView';
import { OurStoryView } from './components/views/OurStoryView';
import { WishlistView } from './components/views/WishlistView';
import { AccountView } from './components/views/AccountView';

// Modals & Overlays
import { PageTransition } from './components/motion/PageTransition';
import { ProductDetailModal } from './components/commerce/ProductDetailModal';
import { CartDrawer } from './components/commerce/CartDrawer';
import { SearchModal } from './components/commerce/SearchModal';
import { SizeGuideModal } from './components/commerce/SizeGuideModal';
import { QuickAddModal } from './components/commerce/QuickAddModal';
import { CheckoutModal } from './components/commerce/CheckoutModal';

const AppContent: React.FC = () => {
  const {
    activeView,
    selectedProduct,
    closeProductDetail,
    quickAddProduct,
    setQuickAddProduct,
    introDismissed,
    setIntroDismissed,
  } = useShop();

  const handleIntroComplete = () => {
    setIntroDismissed(true);
    try {
      sessionStorage.setItem('tehri_intro_seen', 'true');
    } catch {
      // ignore
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F8F5EF] text-[#151515] flex flex-col font-sans selection:bg-[#98323F] selection:text-[#F8F5EF]">
        {/* Preloader Intro Experience */}
        {!introDismissed && <IntroExperience onComplete={handleIntroComplete} />}

        {/* Persistent Global Announcement Bar */}
        <AnnouncementBar />

        {/* Adaptive Header Navigation */}
        <Navbar />

        {/* Full-screen Mobile Editorial Drawer Menu */}
        <MobileMenu />

        {/* Main Dynamic View Content */}
        <main className="flex-1">
          <PageTransition viewKey={activeView}>
            {activeView === 'home' && (
              <>
                <Hero />
                <NewArrivals />
                <EditorialSplit />
                <ShopGenderSplit />
                <FeaturedCollection />
                <HorizontalLookbook />
                <BrandStory />
                <CampaignFilm />
                <CategoryGrid />
                <InstagramFeed />
                <Newsletter />
              </>
            )}

            {activeView === 'shop' && (
              <ShopView title="FULL ATELIER ARCHIVE" initialCategory="all" initialGender="all" />
            )}

            {activeView === 'new-in' && (
              <ShopView title="NEW ARRIVALS · AW 2026" initialCategory="all" initialGender="all" />
            )}

            {activeView === 'women' && (
              <ShopView title="WOMEN'S COLLECTION" initialCategory="all" initialGender="women" />
            )}

            {activeView === 'men' && (
              <ShopView title="MEN'S COLLECTION" initialCategory="all" initialGender="men" />
            )}

            {activeView === 'collections' && (
              <ShopView title="COLLECTION 01: BETWEEN FORM & FLOW" initialCategory="all" initialGender="all" />
            )}

            {activeView === 'story' && <OurStoryView />}
            {activeView === 'wishlist' && <WishlistView />}
            {activeView === 'account' && <AccountView />}
          </PageTransition>
        </main>

        {/* Architectural Flagship Footer */}
        <Footer />

        {/* Modals & Overlays */}
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={closeProductDetail}
          />
        )}

        {quickAddProduct && (
          <QuickAddModal
            product={quickAddProduct}
            onClose={() => setQuickAddProduct(null)}
          />
        )}

        <CartDrawer />
        <SearchModal />
        <SizeGuideModal />
        <CheckoutModal />
      </div>
    </SmoothScroll>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
