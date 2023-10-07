import { useState } from 'react';
import AutoBatchingExample from './pages/AutoBatchingExample';
import TabButton from './components/TabButton';
import AboutPage from './pages/AboutPage';
import Post from './pages/Post';
import DeferredValueExample from './pages/DeferredValueExample';
import IdExample from './pages/IdExample';
import SyncExternalStoreExample from './pages/SyncExternalStoreExample/index';
import SuspenseExample from './pages/SuspenseExample';

function App() {
  const [tab, setTab] = useState('about');

  console.log('StrickMode log');
  const selectTab = (tab) => {
    setTab(tab);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <TabButton
          title={'About'}
          onClick={() => {
            selectTab('about');
          }}
        />
        <TabButton
          title={'autoBatching'}
          onClick={() => selectTab('autoBatching')}
        />
        <TabButton title={'Post'} onClick={() => selectTab('post')} />
        <TabButton
          title={'Deferred Value Example'}
          onClick={() => selectTab('deferredValueExample')}
        />
        <TabButton
          title={'useId Example'}
          onClick={() => selectTab('useIdExample')}
        />
        <TabButton
          title={'Sync External Store Example'}
          onClick={() => selectTab('syncExternalStoreExample')}
        />
        <TabButton
          title={'Suspense Example'}
          onClick={() => selectTab('suspenseExample')}
        />
      </div>
      <div
        style={{
          height: '2px',
          background: '#FFF',
          margin: '10px 0',
        }}
      />
      {tab === 'about' && <AboutPage />}
      {tab === 'autoBatching' && <AutoBatchingExample />}
      {tab === 'post' && <Post />}
      {tab === 'deferredValueExample' && <DeferredValueExample />}
      {tab === 'useIdExample' && <IdExample />}
      {tab === 'syncExternalStoreExample' && <SyncExternalStoreExample />}
      {tab === 'suspenseExample' && <SuspenseExample />}
    </div>
  );
}

export default App;
