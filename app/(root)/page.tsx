import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async() => {
    const loggedIn = await getLoggedInUser();
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type='greeting'
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="Access and manage your cash flow effectively."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={120050.10}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar 
                user={loggedIn}
                transcations={[]}
                banks={[{ currentBalance: 123.50 }, {currentBalance: 500.50}]}
            />
        </section>
    )
}

export default Home