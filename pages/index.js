import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

export default function Home({ campaigns }) {
  const items = campaigns.map((item) => {
    return {
      header: item,
      description: (
        <Link route={`/campaigns/${item}`}>
          <a>View Campaign</a>
        </Link>
      ),
      fluid: true,
    };
  });

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button floated="right" content="Create Campaign" icon="add circle" primary />
          </a>
        </Link>
        <Card.Group items={items} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { props: { campaigns } };
}
