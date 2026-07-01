import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vdfokus.co.id";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/int-prep`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/placement`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/psychological-test`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}