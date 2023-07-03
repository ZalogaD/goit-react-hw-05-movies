import { Outlet } from 'react-router-dom';
import { Cont, Header, LinkList, LinkItem, LinkPage } from './Layout.styled';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';

const Layout = () => {
  const Layout = (
    <>
      <Header>
        <Cont>
          <nav>
            <LinkList>
              <LinkItem>
                <LinkPage to="/" end>
                  HOME
                </LinkPage>
              </LinkItem>
              <LinkItem>
                <LinkPage to="/move">MOVIE</LinkPage>
              </LinkItem>
            </LinkList>
          </nav>
        </Cont>
      </Header>
      <main>
        <Cont>
          <Suspense fallback={<Loader isLoad={true} />}>
            <Loader />
            <Outlet />
          </Suspense>
        </Cont>
      </main>
    </>
  );
  return Layout;
};

export default Layout;
