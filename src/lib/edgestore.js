'use client';

import { createEdgeStoreProvider } from '@edgestore/react';

// Removing the type annotation for EdgeStoreRouter
const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider();

export { EdgeStoreProvider, useEdgeStore };
