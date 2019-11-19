import * as React from 'react';
import BcIcon from "../images/blockchain.png";
import { Paper, Typography, Chip } from '@material-ui/core';

const BlockchainWhatIsItArticle: React.FC = () => {

    return (
        <Paper className="Article">
            <img src={BcIcon} />
            <Typography variant="h4" style={{marginBottom: 20}}>The blockchain what is it?
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="blockchain" /><Chip label="cryptocurrency" />
            </div>
            <Typography variant="caption" className="Article-Date">15th November 2017</Typography>
            <Typography variant="body1">
                Lately I've been reading and taking an interest in the technology known as the blockchain. In this article I attempt to outline and explain in broad terms what the blockchain is and how it has the potential to change society in a number of ways.
            </Typography>
            <Typography variant="h6">So what is the blockchain?</Typography>
            <Typography variant='body1' className='Courier-Typography'>"A blockchain[1][2][3] – originally block chain[4][5] – is a continuously growing list of records, called blocks, which are linked and secured using cryptography.[wikipedia]"</Typography>
            <Typography variant="body1">
                So lets break this statement down. First is the continuously growing list of records, which essentially is like a database in the technical aspect in which "rows" or in case of the blockchain "blocks" keep getting added to an ever growing collection of "stuff"
            </Typography>
            <Typography variant="body1">
                What is this "stuff" we keep adding? Well it can be anything really, anything that can be cryptographically hashed and stored digitally. For example a record of a monetary transaction or a music file or some digital artwork.
            </Typography>
            <Typography variant="body1">
                All these records are linked together in whats called a "block" which are further linked together in the blockchain and are timestamped and verified.
            </Typography>
            <Typography variant="body1">
                That's all well and good but we already have the ability to store data like in in the form of databases. Why are we interested in a blockchain?
            </Typography>
            <Typography variant="h6">Distributed blockchain</Typography>
            <Typography variant="body1">
                The most interesting aspects of the blockchain technology is the fact that it is distributed across multiple parties who verify the blocks by doing some computationally expensive task and all parties have to agree on the correctness of the blockchain entries.
            </Typography>
            <Typography variant="body1">
                This is a massive difference to most databases that are centrally stored and controlled by one or very few entities.
            </Typography>
            <Typography variant="body1">
                This means that no one person or company can take control of the blockchain and manipulate it to their own ends.
            </Typography>
            <Typography variant="body1">
                Think banks and governments that control currency, think record labels that control rights to music and you will get the idea.
            </Typography>
            <Typography variant="h6">Moving to a more distributed society.</Typography>
            <Typography variant="body1">
                 If we think in terms of what applications we can use the blockchain for, we can point to the main and most well known application which is the Bitcoin digital currency.
            </Typography>
            <Typography variant="body1">
                Bitcoin uses the blockchain to store it's transactions on and to verify and protect users of the currency from things like double spending and fraud.
            </Typography>
            <Typography variant="body1">
                Bitcoin has no central bank or institution controlling the currency and this means that anyone anywhere in the world can use the currency to purchase good or services, people who would normally not be able to participate in the world of financial services. Billions of people in the world right now still have no access to financial services. What people do have access to is a mobile phone and the internet. This is where blockchain and digital currencies can enable a whole new economy based on distributed ledgers.
            </Typography>
            <Typography variant="h6">The cryptography</Typography>
            <Typography variant="body1">
                Let takes a look at the next statement in the definition that says the blocks are linked and secured using cryptography.
            </Typography>
            <Typography variant="body1">
                Each piece of data in the blockchain is encrypted with whats called asymmetric encryption (or public key cryptography) which essentially means that you have both a public and private encryption key and every piece of data gets encrypted with your private key. This means that only you have access to the data that is encrypted with your private key.
            </Typography>
            <Typography variant="body1">
                Data encrypted with a private key can only be verified with the corresponding public key and so a digital signature made up of a hash from a users private key provides a cryptographically secure way of identifying someone (or something).
            </Typography>
            <Typography variant="body1">
                In the use of Bitcoin and other digital currencies you maintain a "wallet" which is encrypted with your private key and allows the blockchain to verify that the transactions you created (for instance to send some currency to another wallet) are allowed and you are not trying to spend currency you don't own.
            </Typography>
            <Typography variant="h6">Smart contracts</Typography>
            <Typography variant="body1">
            Smart contracts are in my option the way we are going to use the blockchain going forward. Essentially smart contracts allow users of the blockchain technology to automate transactions and programatically execute workflows that influence the outside world.
            </Typography>
            <Typography variant="body1">
            For example imagine setting up a contract with a freelance software developer to build you a website. The smart contract can digitally record every detail of the agreement and automate payment once certain milestones have been completed. Once the developer has built the home page you could automate a payment of digital funds directly into her account. The contract is cryptographically secured in the blockchain and distributed between multiple users in the system so it cannot be changed later or disputed.
            </Typography>
            <Typography variant="h6">Micropayments</Typography>
            <Typography variant="body1">
            Blockchain based currencies allow micropayments which would be prohibitively expensive due to transaction fees from banks and payments providers such as Visa. People in countries that can't use these payments providers because the transaction fees are too high can suddenly participate in an digital economy and they can also store their savings somewhere less risky (rather than things like livestock for instance) and be afforded the luxuries of financials services that developed countries enjoy.
            </Typography>
            <Typography variant="h6">Identities and reputations</Typography>
            <Typography variant="body1">
            When transactions and services are based on the blockchain everything is stored and publicly available to anyone who can read the blockchain. Online identities and reputations can be built up and moved away from central control. Want to get credit? A company could look at your blockchain history and determine exactly how reliable you are instead of relying on the checkbox approach of most credit agencies. More people can participate in an economy based on blockchain technologies than could previously.
            </Typography>
            <Typography variant="h6">Conclusion</Typography>
            <Typography variant="body1">
            Blockchain technology enables a host of new services and economies that was previously either unavailable or controlled centrally by the "key" holders who only really have their own interests in mind.
            </Typography>
            <Typography variant="body1">
            Distributed ledgers based on the blockchain can free us from the reliance on centrally controlled intermediates and create a more peer to peer society.
            </Typography>
            <Typography variant="body1">
            I am going to follow this article up with a deeper dive into specific uses and the technical aspects of blockchain implementations.
            </Typography>
        </Paper>
    );
}

export default BlockchainWhatIsItArticle;