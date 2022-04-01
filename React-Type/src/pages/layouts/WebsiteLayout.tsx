import { Outlet } from 'react-router-dom'
import React, { useState } from "react";
import HeaderWebsite from './HeaderWebsite';
import FooterWebsite from './FooterWebsite';

// export default function Index() {

type Props = {}

const WebsiteLayout = (props: Props) => {
  
  return (
    <div>
      <header>
        <HeaderWebsite />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterWebsite />
      </footer>
    </div>
  );
}

export default WebsiteLayout