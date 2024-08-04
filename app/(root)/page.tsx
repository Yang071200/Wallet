import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Gualberto', lastName: 'Oyangoren', email: 'businessforyang101@gmail.com' };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type='greeting'
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
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
                banks={[{}, {}]}
            />
        </section>
    )
}

export default Home