import * as React from 'react';
import { Route } from "react-router-dom";
import BlockchainWhatIsItArticle from '../articles/BlockchainWhatIsItArticle';
import MyFirstAlexaSkill from '../articles/MyFirstAlexaSkill';

const ArticlesRouter: React.FC = () => {

    return (
        <div>
        <Route exact path="/tech/articles/blockchain-what-is-it" render={
            (props) => <BlockchainWhatIsItArticle />
        } />
        <Route exact path="/tech/articles/my-first-alexa-skill" render={
            (props) => <MyFirstAlexaSkill />
        } />
        </div>
    );
}

export default ArticlesRouter;