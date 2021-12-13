import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { SectionTitle } from './Statistics/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => (
  <>
    <Profile user={user} />
    <SectionTitle title="Upload stats">
      <Statistics items={data} />
    </SectionTitle>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
