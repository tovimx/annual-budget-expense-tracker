/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IncomeImport } from './routes/income'
import { Route as ExpenseImport } from './routes/expense'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as LayoutImport } from './routes/_layout'
import { Route as AuthImport } from './routes/_auth'
import { Route as MonthImport } from './routes/$month'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as DashboardUsersImport } from './routes/dashboard/users'
import { Route as DashboardInvoicesImport } from './routes/dashboard.invoices'
import { Route as LayoutLayoutBImport } from './routes/_layout.layout-b'
import { Route as LayoutLayoutAImport } from './routes/_layout.layout-a'
import { Route as AuthProfileImport } from './routes/_auth.profile'
import { Route as thisFolderIsNotInTheUrlRouteGroupImport } from './routes/(this-folder-is-not-in-the-url)/route-group'
import { Route as DashboardUsersIndexImport } from './routes/dashboard/users/index'
import { Route as DashboardInvoicesIndexImport } from './routes/dashboard.invoices.index'
import { Route as DashboardUsersUserImport } from './routes/dashboard/users/user'
import { Route as DashboardInvoicesInvoiceIdImport } from './routes/dashboard.invoices.$invoiceId'

// Create Virtual Routes

const FebreroIndexLazyImport = createFileRoute('/febrero/')()
const EneroIndexLazyImport = createFileRoute('/enero/')()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IncomeRoute = IncomeImport.update({
  path: '/income',
  getParentRoute: () => rootRoute,
} as any)

const ExpenseRoute = ExpenseImport.update({
  path: '/expense',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const MonthRoute = MonthImport.update({
  path: '/$month',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const FebreroIndexLazyRoute = FebreroIndexLazyImport.update({
  path: '/febrero/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/febrero/index.lazy').then((d) => d.Route))

const EneroIndexLazyRoute = EneroIndexLazyImport.update({
  path: '/enero/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/enero/index.lazy').then((d) => d.Route))

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardUsersRoute = DashboardUsersImport.update({
  path: '/users',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardInvoicesRoute = DashboardInvoicesImport.update({
  path: '/invoices',
  getParentRoute: () => DashboardRoute,
} as any)

const LayoutLayoutBRoute = LayoutLayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLayoutARoute = LayoutLayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => LayoutRoute,
} as any)

const AuthProfileRoute = AuthProfileImport.update({
  path: '/profile',
  getParentRoute: () => AuthRoute,
} as any)

const thisFolderIsNotInTheUrlRouteGroupRoute =
  thisFolderIsNotInTheUrlRouteGroupImport.update({
    path: '/route-group',
    getParentRoute: () => rootRoute,
  } as any)

const DashboardUsersIndexRoute = DashboardUsersIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardUsersRoute,
} as any)

const DashboardInvoicesIndexRoute = DashboardInvoicesIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardInvoicesRoute,
} as any)

const DashboardUsersUserRoute = DashboardUsersUserImport.update({
  path: '/user',
  getParentRoute: () => DashboardUsersRoute,
} as any)

const DashboardInvoicesInvoiceIdRoute = DashboardInvoicesInvoiceIdImport.update(
  {
    path: '/$invoiceId',
    getParentRoute: () => DashboardInvoicesRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$month': {
      id: '/$month'
      path: '/$month'
      fullPath: '/$month'
      preLoaderRoute: typeof MonthImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/expense': {
      id: '/expense'
      path: '/expense'
      fullPath: '/expense'
      preLoaderRoute: typeof ExpenseImport
      parentRoute: typeof rootRoute
    }
    '/income': {
      id: '/income'
      path: '/income'
      fullPath: '/income'
      preLoaderRoute: typeof IncomeImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/(this-folder-is-not-in-the-url)/route-group': {
      id: '/route-group'
      path: '/route-group'
      fullPath: '/route-group'
      preLoaderRoute: typeof thisFolderIsNotInTheUrlRouteGroupImport
      parentRoute: typeof rootRoute
    }
    '/_auth/profile': {
      id: '/_auth/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthProfileImport
      parentRoute: typeof AuthImport
    }
    '/_layout/layout-a': {
      id: '/_layout/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayoutAImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/layout-b': {
      id: '/_layout/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayoutBImport
      parentRoute: typeof LayoutImport
    }
    '/dashboard/invoices': {
      id: '/dashboard/invoices'
      path: '/invoices'
      fullPath: '/dashboard/invoices'
      preLoaderRoute: typeof DashboardInvoicesImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/users': {
      id: '/dashboard/users'
      path: '/users'
      fullPath: '/dashboard/users'
      preLoaderRoute: typeof DashboardUsersImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/enero/': {
      id: '/enero/'
      path: '/enero'
      fullPath: '/enero'
      preLoaderRoute: typeof EneroIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/febrero/': {
      id: '/febrero/'
      path: '/febrero'
      fullPath: '/febrero'
      preLoaderRoute: typeof FebreroIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/invoices/$invoiceId': {
      id: '/dashboard/invoices/$invoiceId'
      path: '/$invoiceId'
      fullPath: '/dashboard/invoices/$invoiceId'
      preLoaderRoute: typeof DashboardInvoicesInvoiceIdImport
      parentRoute: typeof DashboardInvoicesImport
    }
    '/dashboard/users/user': {
      id: '/dashboard/users/user'
      path: '/user'
      fullPath: '/dashboard/users/user'
      preLoaderRoute: typeof DashboardUsersUserImport
      parentRoute: typeof DashboardUsersImport
    }
    '/dashboard/invoices/': {
      id: '/dashboard/invoices/'
      path: '/'
      fullPath: '/dashboard/invoices/'
      preLoaderRoute: typeof DashboardInvoicesIndexImport
      parentRoute: typeof DashboardInvoicesImport
    }
    '/dashboard/users/': {
      id: '/dashboard/users/'
      path: '/'
      fullPath: '/dashboard/users/'
      preLoaderRoute: typeof DashboardUsersIndexImport
      parentRoute: typeof DashboardUsersImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthProfileRoute: typeof AuthProfileRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthProfileRoute: AuthProfileRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface LayoutRouteChildren {
  LayoutLayoutARoute: typeof LayoutLayoutARoute
  LayoutLayoutBRoute: typeof LayoutLayoutBRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLayoutARoute: LayoutLayoutARoute,
  LayoutLayoutBRoute: LayoutLayoutBRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface DashboardInvoicesRouteChildren {
  DashboardInvoicesInvoiceIdRoute: typeof DashboardInvoicesInvoiceIdRoute
  DashboardInvoicesIndexRoute: typeof DashboardInvoicesIndexRoute
}

const DashboardInvoicesRouteChildren: DashboardInvoicesRouteChildren = {
  DashboardInvoicesInvoiceIdRoute: DashboardInvoicesInvoiceIdRoute,
  DashboardInvoicesIndexRoute: DashboardInvoicesIndexRoute,
}

const DashboardInvoicesRouteWithChildren =
  DashboardInvoicesRoute._addFileChildren(DashboardInvoicesRouteChildren)

interface DashboardUsersRouteChildren {
  DashboardUsersUserRoute: typeof DashboardUsersUserRoute
  DashboardUsersIndexRoute: typeof DashboardUsersIndexRoute
}

const DashboardUsersRouteChildren: DashboardUsersRouteChildren = {
  DashboardUsersUserRoute: DashboardUsersUserRoute,
  DashboardUsersIndexRoute: DashboardUsersIndexRoute,
}

const DashboardUsersRouteWithChildren = DashboardUsersRoute._addFileChildren(
  DashboardUsersRouteChildren,
)

interface DashboardRouteChildren {
  DashboardInvoicesRoute: typeof DashboardInvoicesRouteWithChildren
  DashboardUsersRoute: typeof DashboardUsersRouteWithChildren
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardInvoicesRoute: DashboardInvoicesRouteWithChildren,
  DashboardUsersRoute: DashboardUsersRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$month': typeof MonthRoute
  '': typeof LayoutRouteWithChildren
  '/dashboard': typeof DashboardRouteWithChildren
  '/expense': typeof ExpenseRoute
  '/income': typeof IncomeRoute
  '/login': typeof LoginRoute
  '/route-group': typeof thisFolderIsNotInTheUrlRouteGroupRoute
  '/profile': typeof AuthProfileRoute
  '/layout-a': typeof LayoutLayoutARoute
  '/layout-b': typeof LayoutLayoutBRoute
  '/dashboard/invoices': typeof DashboardInvoicesRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/enero': typeof EneroIndexLazyRoute
  '/febrero': typeof FebreroIndexLazyRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices/': typeof DashboardInvoicesIndexRoute
  '/dashboard/users/': typeof DashboardUsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$month': typeof MonthRoute
  '': typeof LayoutRouteWithChildren
  '/expense': typeof ExpenseRoute
  '/income': typeof IncomeRoute
  '/login': typeof LoginRoute
  '/route-group': typeof thisFolderIsNotInTheUrlRouteGroupRoute
  '/profile': typeof AuthProfileRoute
  '/layout-a': typeof LayoutLayoutARoute
  '/layout-b': typeof LayoutLayoutBRoute
  '/dashboard': typeof DashboardIndexRoute
  '/enero': typeof EneroIndexLazyRoute
  '/febrero': typeof FebreroIndexLazyRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices': typeof DashboardInvoicesIndexRoute
  '/dashboard/users': typeof DashboardUsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$month': typeof MonthRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_layout': typeof LayoutRouteWithChildren
  '/dashboard': typeof DashboardRouteWithChildren
  '/expense': typeof ExpenseRoute
  '/income': typeof IncomeRoute
  '/login': typeof LoginRoute
  '/route-group': typeof thisFolderIsNotInTheUrlRouteGroupRoute
  '/_auth/profile': typeof AuthProfileRoute
  '/_layout/layout-a': typeof LayoutLayoutARoute
  '/_layout/layout-b': typeof LayoutLayoutBRoute
  '/dashboard/invoices': typeof DashboardInvoicesRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/enero/': typeof EneroIndexLazyRoute
  '/febrero/': typeof FebreroIndexLazyRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices/': typeof DashboardInvoicesIndexRoute
  '/dashboard/users/': typeof DashboardUsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/$month'
    | ''
    | '/dashboard'
    | '/expense'
    | '/income'
    | '/login'
    | '/route-group'
    | '/profile'
    | '/layout-a'
    | '/layout-b'
    | '/dashboard/invoices'
    | '/dashboard/users'
    | '/dashboard/'
    | '/enero'
    | '/febrero'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices/'
    | '/dashboard/users/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/$month'
    | ''
    | '/expense'
    | '/income'
    | '/login'
    | '/route-group'
    | '/profile'
    | '/layout-a'
    | '/layout-b'
    | '/dashboard'
    | '/enero'
    | '/febrero'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices'
    | '/dashboard/users'
  id:
    | '__root__'
    | '/'
    | '/$month'
    | '/_auth'
    | '/_layout'
    | '/dashboard'
    | '/expense'
    | '/income'
    | '/login'
    | '/route-group'
    | '/_auth/profile'
    | '/_layout/layout-a'
    | '/_layout/layout-b'
    | '/dashboard/invoices'
    | '/dashboard/users'
    | '/dashboard/'
    | '/enero/'
    | '/febrero/'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices/'
    | '/dashboard/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MonthRoute: typeof MonthRoute
  AuthRoute: typeof AuthRouteWithChildren
  LayoutRoute: typeof LayoutRouteWithChildren
  DashboardRoute: typeof DashboardRouteWithChildren
  ExpenseRoute: typeof ExpenseRoute
  IncomeRoute: typeof IncomeRoute
  LoginRoute: typeof LoginRoute
  thisFolderIsNotInTheUrlRouteGroupRoute: typeof thisFolderIsNotInTheUrlRouteGroupRoute
  EneroIndexLazyRoute: typeof EneroIndexLazyRoute
  FebreroIndexLazyRoute: typeof FebreroIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MonthRoute: MonthRoute,
  AuthRoute: AuthRouteWithChildren,
  LayoutRoute: LayoutRouteWithChildren,
  DashboardRoute: DashboardRouteWithChildren,
  ExpenseRoute: ExpenseRoute,
  IncomeRoute: IncomeRoute,
  LoginRoute: LoginRoute,
  thisFolderIsNotInTheUrlRouteGroupRoute:
    thisFolderIsNotInTheUrlRouteGroupRoute,
  EneroIndexLazyRoute: EneroIndexLazyRoute,
  FebreroIndexLazyRoute: FebreroIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$month",
        "/_auth",
        "/_layout",
        "/dashboard",
        "/expense",
        "/income",
        "/login",
        "/route-group",
        "/enero/",
        "/febrero/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$month": {
      "filePath": "$month.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/profile"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/layout-a",
        "/_layout/layout-b"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/invoices",
        "/dashboard/users",
        "/dashboard/"
      ]
    },
    "/expense": {
      "filePath": "expense.tsx"
    },
    "/income": {
      "filePath": "income.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/route-group": {
      "filePath": "(this-folder-is-not-in-the-url)/route-group.tsx"
    },
    "/_auth/profile": {
      "filePath": "_auth.profile.tsx",
      "parent": "/_auth"
    },
    "/_layout/layout-a": {
      "filePath": "_layout.layout-a.tsx",
      "parent": "/_layout"
    },
    "/_layout/layout-b": {
      "filePath": "_layout.layout-b.tsx",
      "parent": "/_layout"
    },
    "/dashboard/invoices": {
      "filePath": "dashboard.invoices.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/invoices/$invoiceId",
        "/dashboard/invoices/"
      ]
    },
    "/dashboard/users": {
      "filePath": "dashboard/users.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/users/user",
        "/dashboard/users/"
      ]
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    },
    "/enero/": {
      "filePath": "enero/index.lazy.tsx"
    },
    "/febrero/": {
      "filePath": "febrero/index.lazy.tsx"
    },
    "/dashboard/invoices/$invoiceId": {
      "filePath": "dashboard.invoices.$invoiceId.tsx",
      "parent": "/dashboard/invoices"
    },
    "/dashboard/users/user": {
      "filePath": "dashboard/users/user.tsx",
      "parent": "/dashboard/users"
    },
    "/dashboard/invoices/": {
      "filePath": "dashboard.invoices.index.tsx",
      "parent": "/dashboard/invoices"
    },
    "/dashboard/users/": {
      "filePath": "dashboard/users/index.tsx",
      "parent": "/dashboard/users"
    }
  }
}
ROUTE_MANIFEST_END */
