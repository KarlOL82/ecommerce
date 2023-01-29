import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'z4jagavb',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: ''
})