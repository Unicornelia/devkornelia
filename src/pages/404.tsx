import { Layout } from '@/components/Layout';

const NotFoundPage = () => (
  <Layout>
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-green mb-10">404 - Not Found</h1>
      <p className="text-slate">You just hit a route that doesn't exist... the sadness.</p>
      <a className="text-green no-underline font-bold mt-20" href="/">
        <span>◁ Go back home</span>
      </a>
    </main>
  </Layout>
);

export default NotFoundPage;
