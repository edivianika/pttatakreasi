import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase, isSupabaseConfigured } from "./supabase";

const DEMO_USER = {
  id: "demo-admin",
  email: "admin.demo@tatakreasi.local",
};

const DEMO_PROFILE = {
  id: DEMO_USER.id,
  full_name: "Admin Demo",
  role: "admin",
  daily_ai_background_limit: 10,
};

const AuthContext = createContext(null);

async function getProfile(user) {
  if (!supabase || !user) return DEMO_PROFILE;

  const { data, error } = await supabase
    .from("profiles")
    .select("id, full_name, role, daily_ai_background_limit")
    .eq("id", user.id)
    .single();

  if (error) {
    return {
      id: user.id,
      full_name: user.email?.split("@")[0] || "Marketer",
      role: "marketer",
      daily_ai_background_limit: 10,
    };
  }

  return data;
}

export function StudioAuthProvider({ children }) {
  const [session, setSession] = useState(
    isSupabaseConfigured ? null : { user: DEMO_USER, access_token: "demo-token" },
  );
  const [profile, setProfile] = useState(isSupabaseConfigured ? null : DEMO_PROFILE);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!supabase) return undefined;

    let active = true;

    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return;
      const nextSession = data.session;
      setSession(nextSession);
      setProfile(nextSession ? await getProfile(nextSession.user) : null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      setSession(nextSession);
      setProfile(nextSession ? await getProfile(nextSession.user) : null);
      setLoading(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      session,
      profile,
      loading,
      isDemoMode: !isSupabaseConfigured,
      signInWithOtp: async (email) => {
        if (!supabase) return { error: null };
        return supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/tools/studio-promosi`,
            shouldCreateUser: false,
          },
        });
      },
      signOut: async () => {
        if (!supabase) return;
        await supabase.auth.signOut();
      },
    }),
    [loading, profile, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useStudioAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useStudioAuth must be used inside StudioAuthProvider");
  return context;
}
