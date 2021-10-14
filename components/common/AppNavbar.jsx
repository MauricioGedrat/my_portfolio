/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Logo from '../SvgIcons/Logo'
import Link from 'next/link'
const solutions = [
    {
        name: 'Analytics',
        description:
            'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description:
            'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    {
        name: 'Security',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Integrations',
        description:
            "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description:
            'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description:
            'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description:
            'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description:
            'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    {
        name: 'Security',
        description: 'Understand how we take your privacy seriously.',
        href: '#',
        icon: ShieldCheckIcon,
    },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    {
        id: 2,
        name: 'How to use search engine optimization to drive traffic to your site',
        href: '#',
    },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AppNavbar() {
    return (
        <Popover className="relative bg-white mb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <Logo />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group
                        as="nav"
                        className="hidden md:flex space-x-10"
                    >
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <div className="mt-2">
                                        <Link href="/Images">
                                            <a className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200 hover:text-black  text-blue-400">
                                                IMAGENS
                                            </a>
                                        </Link>
                                        <Link href="/Details">
                                            <a className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200 hover:text-black  text-blue-400">
                                                DETALHES
                                            </a>
                                        </Link>
                                        <a
                                            href="#scalar"
                                            className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200 hover:text-black text-blue-400"
                                        >
                                            SCALAR ERP
                                        </a>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {solutions.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon
                                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map(
                                                        (item) => (
                                                            <div
                                                                key={item.name}
                                                                className="flow-root"
                                                            >
                                                                <a
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                                                >
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <span className="ml-3">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <div className="mt-2">
                                            <Link href="/Images">
                                                <a className="mx-4 font-semibold p-2 hover:bg-gray-200  rounded-xl duration-200 text-blue-400">
                                                    IMAGENS
                                                </a>
                                            </Link>
                                            <Link href="/Details">
                                                <a className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200 text-blue-400">
                                                    DETALHES
                                                </a>
                                            </Link>
                                            <a
                                                href="#scalar"
                                                className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200 text-blue-400"
                                            >
                                                SCALAR ERP
                                            </a>
                                        </div>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-12 pb-6 px-5 ">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="mt-2">
                                        <Link href="/Images">
                                            <a className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200">
                                                IMAGENS
                                            </a>
                                        </Link>
                                        <Link href="/Details">
                                            <a className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200">
                                                DETALHES
                                            </a>
                                        </Link>
                                        <a
                                            href="#scalar"
                                            className="mx-4 font-semibold p-2 hover:bg-gray-200 rounded-xl duration-200"
                                        >
                                            SCALAR
                                        </a>
                                    </div>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
