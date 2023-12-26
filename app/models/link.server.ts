import { prisma } from '~/utils/db.server';
import type { Link } from '@prisma/client';

export async function getLinks() {
    return prisma.link.findMany();
}

export async function createLink(
    link: Pick<Link, 'fullUrl' | 'shortUrl' | 'clicks' | 'active' | 'author' | 'vanityUrl' | 'expiration' | 'note' >
) {
    return prisma.link.create({ data: link });
}
