import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GearGuideSection } from "@/components/GearGuideSection";
import { PaddleGuideSection } from "@/components/PaddleGuideSection";
import { PaddlerTipsSection } from "@/components/PaddlerTipsSection";
import { RiverFlowTipsSection } from "@/components/RiverFlowTipsSection";
import { RiverMapSection } from "@/components/RiverMapSection";
import { SafetySection } from "@/components/SafetySection";
import { GlossarySection } from "@/components/GlossarySection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { AddTermModal } from "@/components/AddTermModal";
import { AddRiverModal } from "@/components/AddRiverModal";
import { SpotDetailModal } from "@/components/SpotDetailModal";
import { GearQuizModal } from "@/components/GearQuizModal";
import { AdminAffiliateModal } from "@/components/AdminAffiliateModal";
import { SponsorSection } from "@/components/SponsorSection";
import { SponsorAdminModal } from "@/components/SponsorAdminModal";
import { AdminMenuModal } from "@/components/AdminMenuModal";

import { INITIAL_RIVER_SPOTS } from "@/data/riverData";
import { INITIAL_GLOSSARY_TERMS } from "@/data/glossaryData";
import { DEFAULT_AFFILIATE_CONFIG, DEFAULT_AFFILIATE_PRODUCTS } from "@/data/defaultAffiliates";
import { SponsorData, DEFAULT_SPONSOR_DATA, SPONSOR_STORAGE_KEY } from "@/data/sponsorData";
import { RiverSpot, GlossaryTerm } from "@/types/kayak";
import {
  AffiliateGlobalConfig,
  AffiliateProductLink,
  AffiliateClickRecord,
  AffiliatePlatform,
} from "@/types/affiliate";

const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
        return window.localStorage.getItem(key);
      }
    } catch {}
    return null;
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
        window.localStorage.setItem(key, value);
      }
    } catch {}
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch {}
  },
};

export default function App() {
  // River spots state with persistence
  const [rivers, setRivers] = useState<RiverSpot[]>(() => {
    try {
      const saved = safeLocalStorage.getItem("rapidpulse_user_rivers");
      if (saved) {
        const userAdded: RiverSpot[] = JSON.parse(saved);
        if (Array.isArray(userAdded)) {
          return [...userAdded, ...INITIAL_RIVER_SPOTS];
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_RIVER_SPOTS;
  });

  // Glossary terms state with persistence
  const [terms, setTerms] = useState<GlossaryTerm[]>(() => {
    try {
      const saved = safeLocalStorage.getItem("rapidpulse_user_terms");
      if (saved) {
        const userAdded: GlossaryTerm[] = JSON.parse(saved);
        if (Array.isArray(userAdded)) {
          return [...userAdded, ...INITIAL_GLOSSARY_TERMS];
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_GLOSSARY_TERMS;
  });

  // Affiliate Config state with persistence
  const [affiliateConfig, setAffiliateConfig] = useState<AffiliateGlobalConfig>(() => {
    try {
      const saved = safeLocalStorage.getItem("rapidpulse_affiliate_config");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          return { ...DEFAULT_AFFILIATE_CONFIG, ...parsed };
        }
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_AFFILIATE_CONFIG;
  });

  // Affiliate Product Links with persistence
  const [affiliateProducts, setAffiliateProducts] = useState<AffiliateProductLink[]>(() => {
    try {
      const saved = safeLocalStorage.getItem("rapidpulse_affiliate_products");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_AFFILIATE_PRODUCTS;
  });

  // Affiliate Click Tracker logs with persistence
  const [affiliateClicks, setAffiliateClicks] = useState<AffiliateClickRecord[]>(() => {
    try {
      const saved = safeLocalStorage.getItem("rapidpulse_affiliate_clicks");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Sponsor section (corporate links & affiliate slots) with persistence
  const [sponsorData, setSponsorData] = useState<SponsorData>(() => {
    try {
      const saved = safeLocalStorage.getItem(SPONSOR_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          return { ...DEFAULT_SPONSOR_DATA, ...parsed };
        }
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_SPONSOR_DATA;
  });

  // Modal open states
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAddTermOpen, setIsAddTermOpen] = useState(false);
  const [isAddRiverOpen, setIsAddRiverOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<RiverSpot | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSponsorAdminOpen, setIsSponsorAdminOpen] = useState(false);
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);

  // Save sponsor data handler
  const handleSaveSponsorData = (data: SponsorData) => {
    setSponsorData(data);
    safeLocalStorage.setItem(SPONSOR_STORAGE_KEY, JSON.stringify(data));
  };

  // Track affiliate link clicks
  const handleTrackClick = (gearId: string, gearTitle: string, platform: AffiliatePlatform) => {
    const newRecord: AffiliateClickRecord = {
      id: `click-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      gearId,
      gearTitle,
      platform,
      timestamp: new Date().toLocaleString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setAffiliateClicks((prev) => {
      const updated = [newRecord, ...prev];
      safeLocalStorage.setItem("rapidpulse_affiliate_clicks", JSON.stringify(updated.slice(0, 100)));
      return updated;
    });
  };

  // Save Config handler
  const handleSaveAffiliateConfig = (cfg: AffiliateGlobalConfig) => {
    setAffiliateConfig(cfg);
    safeLocalStorage.setItem("rapidpulse_affiliate_config", JSON.stringify(cfg));
  };

  // Save Products handler
  const handleSaveAffiliateProducts = (prods: AffiliateProductLink[]) => {
    setAffiliateProducts(prods);
    safeLocalStorage.setItem("rapidpulse_affiliate_products", JSON.stringify(prods));
  };

  // Clear clicks handler
  const handleClearClicks = () => {
    setAffiliateClicks([]);
    safeLocalStorage.removeItem("rapidpulse_affiliate_clicks");
  };

  // Add new term handler
  const handleAddTerm = (newTerm: GlossaryTerm) => {
    setTerms((prev) => {
      const updated = [newTerm, ...prev];
      const userAdded = updated.filter((t) => t?.isUserAdded);
      safeLocalStorage.setItem("rapidpulse_user_terms", JSON.stringify(userAdded));
      return updated;
    });
  };

  // Add new river spot handler
  const handleAddRiver = (newSpot: RiverSpot) => {
    setRivers((prev) => {
      const updated = [newSpot, ...prev];
      const userAdded = updated.filter((r) => r?.isUserAdded);
      safeLocalStorage.setItem("rapidpulse_user_rivers", JSON.stringify(userAdded));
      return updated;
    });
  };

  const scrollToMap = () => {
    const el = document.getElementById("river-map");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSafety = () => {
    const el = document.getElementById("safety-training");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header with New to Kayaker.jp wordmark */}
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuiz={() => setIsQuizOpen(true)}
          onExploreMap={scrollToMap}
          onExploreSafety={scrollToSafety}
        />

        {/* Section 1: Gear Guide (With Affiliate Buy Buttons) */}
        <GearGuideSection
          onOpenQuiz={() => setIsQuizOpen(true)}
          affiliateConfig={affiliateConfig}
          affiliateProducts={affiliateProducts}
          onTrackClick={handleTrackClick}
        />

        {/* Section 1-B: Paddle Selection Mastery */}
        <PaddleGuideSection
          affiliateConfig={affiliateConfig}
          affiliateProducts={affiliateProducts}
          onTrackClick={handleTrackClick}
        />

        {/* Section 01-C: Paddler Essential Tips & Anomaly */}
        <PaddlerTipsSection />

        {/* Section 02: River Reading & Flow Tips */}
        <RiverFlowTipsSection />

        {/* Section 03: Safety & Rescue Training Manual */}
        <SafetySection />

        {/* Section 04: River Difficulty Map & Directory */}
        <RiverMapSection
          rivers={rivers}
          onSelectSpot={(spot) => setSelectedSpot(spot)}
          onOpenAddRiver={() => setIsAddRiverOpen(true)}
        />

        {/* Section 4: Whitewater Glossary */}
        <GlossarySection terms={terms} onOpenAddTerm={() => setIsAddTermOpen(true)} />

        {/* Section 5: About New to Kayaker.jp & kayaker Profile */}
        <AboutSection />
      </main>

      {/* Corporate Links & Affiliate Slots (above footer) */}
      <SponsorSection data={sponsorData} />

      {/* Footer */}
      <Footer
        onOpenAdminMenu={() => setIsAdminMenuOpen(true)}
        bannerHtml={sponsorData.footerBannerHtml}
      />

      {/* Interactive Modals */}
      <GearQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        affiliateConfig={affiliateConfig}
        affiliateProducts={affiliateProducts}
        onTrackClick={handleTrackClick}
      />

      <AddTermModal
        isOpen={isAddTermOpen}
        onClose={() => setIsAddTermOpen(false)}
        onAddTerm={handleAddTerm}
      />

      <AddRiverModal
        isOpen={isAddRiverOpen}
        onClose={() => setIsAddRiverOpen(false)}
        onAddRiver={handleAddRiver}
      />

      <SpotDetailModal spot={selectedSpot} onClose={() => setSelectedSpot(null)} />

      {/* Unified Admin Menu (password gate → affiliate / sponsor admin) */}
      <AdminMenuModal
        isOpen={isAdminMenuOpen}
        onClose={() => setIsAdminMenuOpen(false)}
        onOpenAffiliate={() => {
          setIsAdminMenuOpen(false);
          setIsAdminOpen(true);
        }}
        onOpenSponsor={() => {
          setIsAdminMenuOpen(false);
          setIsSponsorAdminOpen(true);
        }}
      />

      {/* Admin Affiliate Management Dashboard */}
      <AdminAffiliateModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        config={affiliateConfig}
        onSaveConfig={handleSaveAffiliateConfig}
        products={affiliateProducts}
        onSaveProducts={handleSaveAffiliateProducts}
        clicks={affiliateClicks}
        onClearClicks={handleClearClicks}
      />

      {/* Sponsor (Corporate Links & Affiliate Slots) Admin */}
      <SponsorAdminModal
        isOpen={isSponsorAdminOpen}
        onClose={() => setIsSponsorAdminOpen(false)}
        data={sponsorData}
        onSave={handleSaveSponsorData}
      />
    </div>
  );
}
