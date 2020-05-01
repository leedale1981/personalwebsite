import * as React from 'react';
import { Route } from "react-router-dom";
import BlockchainWhatIsItArticle from '../articles/BlockchainWhatIsItArticle';
import MicrosoftAzureExams from '../articles/MicrosoftAzureExamsArticle';
import MyFirstAlexaSkill from '../articles/MyFirstAlexaSkill';
import FactoryDesignPattern from '../articles/FactoryDesignPatternArticle';
import BloomFilters from '../articles/BloomFiltersArticle';

const ArticlesRouter: React.FC = () => {

    return (
        <div>
        <Route exact path="/technology/articles/blockchain-what-is-it" render={
            (props) => <BlockchainWhatIsItArticle />
        } />
        <Route exact path="/technology/articles/my-first-alexa-skill" render={
            (props) => <MyFirstAlexaSkill />
        } />
        <Route exact path="/technology/articles/factory-method-design-pattern-csharp" render={
            (props) => <FactoryDesignPattern />
        } />
        <Route exact path="/technology/articles/microsoft-azure-exams" render={
            (props) => <MicrosoftAzureExams />
        } />
        <Route exact path="/technology/articles/bloom-filters" render={
            (props) => <BloomFilters />
        } />
        </div>
    );
}

export default ArticlesRouter;