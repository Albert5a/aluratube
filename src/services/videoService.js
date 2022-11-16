import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://xpytxivlgwyggskgmunx.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweXR4aXZsZ3d5Z2dza2dtdW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NjM3NTUsImV4cCI6MTk4NDAzOTc1NX0.1_nl66AeDT1Ea37Pp1dvB-H4UZDVxbuSjVs9XF0gPrQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}
