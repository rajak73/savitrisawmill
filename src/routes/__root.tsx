import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions, ScrollProgress } from "@/components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen grid place-items-center bg-background px-4 pt-24">
        <div className="text-center max-w-md">
          <div className="display-xl text-foreground">404</div>
          <h1 className="mt-4 display-md">Page not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary mt-8">Back to Home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-md">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">Try again or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try Again</button>
          <a href="/" className="btn-ghost-dark">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Savitri Saw Mill — Quality Timber. Precision Cutting." },
      { name: "description", content: "Premium timber processing for construction, furniture and industrial applications. Bulk supply, custom cutting and pan-India delivery." },
      { name: "author", content: "Savitri Saw Mill" },
      { property: "og:site_name", content: "Savitri Saw Mill" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1F2937" },
      { property: "og:title", content: "Savitri Saw Mill — Quality Timber. Precision Cutting." },
      { name: "twitter:title", content: "Savitri Saw Mill — Quality Timber. Precision Cutting." },
      { property: "og:description", content: "Premium timber processing for construction, furniture and industrial applications. Bulk supply, custom cutting and pan-India delivery." },
      { name: "twitter:description", content: "Premium timber processing for construction, furniture and industrial applications. Bulk supply, custom cutting and pan-India delivery." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f0825ab-1c89-4c7c-a3a1-ce43b9e1750d/id-preview-e69300ef--21383a2d-f6c8-4023-8ea3-127a7dc6ad1a.lovable.app-1782396548471.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f0825ab-1c89-4c7c-a3a1-ce43b9e1750d/id-preview-e69300ef--21383a2d-f6c8-4023-8ea3-127a7dc6ad1a.lovable.app-1782396548471.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
