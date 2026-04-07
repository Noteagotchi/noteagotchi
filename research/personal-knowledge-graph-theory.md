# Personal Knowledge Graph Theory

A personal knowledge graph is a **property graph** — specifically a **directed, labeled, weighted multigraph**. Here's what that means unpacked:

**Directed** — edges have a source and target, because relationships have directionality. "Note A *cites* Note B" is not the same as "Note B cites Note A."

**Labeled** — both nodes and edges carry type labels. Nodes might be typed as Note, Block, Entity, or Concept; edges carry relationship types like `SEMANTICALLY_SIMILAR`, `CITES`, `CONTRADICTS`, etc.

**Weighted** — edges carry numeric weights representing relationship strength (e.g., cosine similarity scores, co-occurrence frequency, or GNN-predicted link probability).

**Multigraph** — two nodes can have more than one edge between them of different types. A note might both *share an entity with* and *contradict* another note simultaneously.

**Property graph** (as opposed to an RDF/triple-store graph) — nodes and edges can carry arbitrary key-value properties beyond just their type label. This is why Neo4j and Memgraph are natural fits: they're purpose-built property graph databases.

There are a few other graph theory dimensions worth noting for your use case specifically:

- **Heterogeneous** — the node set contains multiple distinct types (Note, Block, Entity, Concept), making it an HIN (Heterogeneous Information Network). This matters because standard GNNs assume homogeneous graphs; architectures like HAN (Heterogeneous Attention Network) or HGT (Heterogeneous Graph Transformer) are designed for this.
- **Dynamic** — the graph grows and changes as notes are added or edited, which complicates GNN training (hence the unresolved retraining cadence question in your design).
- **Sparse** — in practice, most node pairs will have no edge, which is typical for knowledge graphs and is part of why link prediction is a meaningful task rather than a trivial one.

The heterogeneous nature is probably the most architecturally significant characteristic for your GML layer decisions.
