import { atom } from 'jotai';

var url = window.location.pathname


export const SidebarState =atom(url.split("/")[1])