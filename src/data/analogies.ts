interface Analogy {
  id: string;
  title: string;
  topic: string;
  episode: { title: string; season: number; number: number; url: string };
  image: string;
  imageAlt: string;
  scene: string;
  parallel: string;
  takeaway: string;
  boundary: string;
}

export const analogies: Analogy[] = [
  {
    id: 'the-everything-car',
    title: 'The car with every requirement',
    topic: 'Customer discovery, god objects, and AI assistants',
    episode: {
      title: 'Oh Brother, Where Art Thou?',
      season: 2,
      number: 15,
      url: 'https://simpsonswiki.com/wiki/Oh_Brother,_Where_Art_Thou%3F',
    },
    image: '/illustrations/everything-car.svg',
    imageAlt: 'An ordinary car weighed down by a tower of boxes, with another box waiting to be added.',
    scene: 'Herb Powell treats Homer as the voice of the average customer and gives him control over a new car. The resulting vehicle piles on features, becomes unaffordable, and ruins the company.',
    parallel: 'One enthusiastic customer is not a market. The same trap produces a god object: one component that owns every responsibility. An AI assistant that must sell, approve refunds, and change account permissions becomes the software version of the everything-car.',
    takeaway: 'Observe several customers doing a specific job before expanding scope. Prototype the smallest useful workflow. Apply single responsibility to the implementation: separate retrieval, policy decisions, and actions behind narrow interfaces, with explicit permission checks.',
    boundary: 'A feature-rich product is not automatically a god object; that term describes code structure. The failure is untested priorities and unchecked authority, not listening to customers.',
  },
  {
    id: 'the-ai-monorail',
    title: 'Buy the outcome, not the monorail',
    topic: 'AI procurement and corporate incentives',
    episode: {
      title: 'Marge vs. the Monorail',
      season: 4,
      number: 12,
      url: 'https://simpsonswiki.com/wiki/Marge_vs._the_Monorail',
    },
    image: '/illustrations/ai-monorail.svg',
    imageAlt: 'A train on a track that ends abruptly, beneath an AI sales billboard; a broken road sits below.',
    scene: 'Springfield has money to fix its roads. Lyle Lanley sells the town a monorail instead. Marge investigates a previous installation and discovers the dangerous gap between the pitch and the delivery.',
    parallel: 'An impressive AI demo can displace an ordinary customer problem. A vendor is rewarded for the sale, a sponsor for announcing a transformation, and the support team inherits the failures. None of those incentives proves the system helps its users.',
    takeaway: 'Write down the customer outcome and a non-AI baseline before procurement. Pilot on representative cases; measure task success, harmful errors, latency, and cost per resolved case. Check customer references, data retention, and an exit path. Give an operational owner authority to stop rollout.',
    boundary: 'Lanley is a fraud; an AI vendor is not one merely for making a bold pitch. Evaluate evidence and incentives rather than assuming either dishonesty or inevitable success.',
  },
  {
    id: 'the-unattended-agent',
    title: 'A moving key is not a working system',
    topic: 'Open-loop automation and AI agent oversight',
    episode: {
      title: 'King-Size Homer',
      season: 7,
      number: 7,
      url: 'https://simpsonswiki.com/wiki/King-Size_Homer',
    },
    image: '/illustrations/unattended-console.svg',
    imageAlt: 'An unattended console with a mechanical arm pressing a key, while a separate outcome gauge points to failure.',
    scene: 'Working from home, Homer leaves a drinking bird pressing a computer key while he goes out. He returns to find it knocked aside and a plant emergency developing.',
    parallel: 'Repeated input is not feedback control. A scheduled script or AI agent can keep sending requests while the real task fails. A green process heartbeat says the worker is alive, not that a refund reached the customer or that an account change was correct.',
    takeaway: 'Close the loop with checks on real outcomes, not just tool calls. Use timeouts, bounded retries, and idempotency keys for repeatable writes. Put a circuit breaker around failing dependencies; route high-impact actions to human approval and alert a named owner when checks fail.',
    boundary: 'The bird is deterministic, not AI; an agent adds uncertainty rather than removing the need for feedback. Human approval also fails without context and time. This is not a design for safety-critical plant control.',
  },
];
