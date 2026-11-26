
import { sanityFetch } from "@/sanity/lib/fetch";
import { servicesQuery } from "@/sanity/lib/queries";

type Service = {
  _id: string;
  title: string;
};

export default async function SanityTestPage() {
  const services = await sanityFetch<Service[]>({
    query: servicesQuery,
  });

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        Sanity Connection Test
      </h1>

      <p className="mt-3">
        Successfully connected to Sanity!
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Services retrieved: {services.length}
      </h2>

      <ul className="mt-4 list-disc pl-6">
        {services.map((service) => (
          <li key={service._id}>
            {service.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
