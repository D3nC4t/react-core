import { ReactNode } from 'react';
export default function extractTextFromElement<Element extends ReactNode = ReactNode>(children: Element): string;
