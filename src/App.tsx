/*
  Component: App.tsx
  * made up of TS, JSX, CSS (optional)
  * every component must return JSX
  * must be exported 
*/

import { Route, Routes } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css"; // optional
import { Footer } from "./shared/components/Footer";
import Header from "./shared/components/Header";
import HomePage from "./pages/home/HomePage";
import ContactsPage from "./pages/contacts/ContactsPage";
import AboutPage from "./pages/about/AboutPage";
import CounterPage from "./pages/counter/CounterPage";
import AddContact from "./pages/contacts/components/AddContact";
import ContactDetails from "./pages/contacts/components/ContactDetails";
import TodosPageV1 from "./pages/todos/TodosPageV1";
import TodosPageV2 from "./pages/todos/TodosPageV2";
import SpotifyPage from "./pages/spotify/SpotifyPage";

// Here's App component
function App() {
  // must return JSX
  return (
    // the below lines are not HTML, but JSX
    <div>
      <Header />

      <main className="container mx-auto">
        <ErrorBoundary
          fallback={<div className="bg-red-200 p-4">Something went wrong</div>}
        >
          {/* Routing Configuration */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/contacts/new" element={<AddContact />} />
            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/todos-v1" element={<TodosPageV1 />} />
            <Route path="/todos-v2" element={<TodosPageV2 />} />
            <Route path="/spotify" element={<SpotifyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/counter" element={<CounterPage />} />
          </Routes>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default App;
