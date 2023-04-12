import { sanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId: '1x0x7x7x',
    dataset: 'production',
    apiVersion: '2023-04-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);
const image = urlFor(post.mainImage).width(600).auto('format').url();