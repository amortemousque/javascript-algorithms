
# Ask clarifying questions 
About wish features you should implement?
What type of loads?
How many request per second the system can handle

# How to 
List 2 or 3 main features
Heavy read / heavy write
Consistency / Availability
Scalability

# Concepts

- **Latency**: Latency is simply the measure of a duration. The duration for an action to complete something or produce a result.  
  > For example: The most commonly understood latency is the "round trip" network request - how long does it take for your front end website (client) to send a query to your server, and get a response back from the server.
- **Throughput**: This can be understood as the maximum capacity of a machine or system.  It's often used in factories to calculate how much work an assembly line can do in an hour or a day, or some other unit of time measurement.
  > For example an assembly line can assemble 20 cars per hour, which is its throughput."
- **Availability** (Ultime / downtimes): It's helpful to think of availability as the `resiliency` of a system.  If a system is robust enough to handle failures in the network, database, servers etc, then it can generally be considered to be a `fault-tolerant` system** - which makes it an available system. When designing a high availability (HA) system, then, you need to reduce or eliminate "single points of failure". You eliminate `single points of failure` by designing redundancy into the system. `Redundancy` is basically making 1 or more alternatives (i.e. backups) to the element that is critical for high availability.
- **Consistency**: `Strict consistency` states that for any incoming write operation, once a write is acknowledged to the client, the updated value is visible. `Eventual consistency` is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value.
- **Single point of truth**: Structuring information models and associated data schema such that every data element is mastered in only one place
- **vertical scaling / horizontal scaling**

## CAP Theorem

![](https://www.researchgate.net/profile/Hamzeh_Khazaei/publication/282679529/figure/fig2/AS:614316814372880@1523475950595/Visualization-of-CAP-theorem.png)

# Database

## SQL vs NoSQL

SQL has ACID (Atomicity, Consistency, Isolation, Durability) transactions so you don’t have to worry about concurrency.
NoSql are highly scalable by nature. They scale horizontally easily

> Tradeoffs: (ACID), Transaction, Consistency against availability

## Index

Indices: Indices allows access very fast to certain data by creating a reference table. They are great but use storage and need to be updated on write operations.

> Tradeoffs: Write operations and memory

## Denormalization

Is a strategy used on a previously-normalized database to increase performance with duplications.

> Tradeoffs:\
> Consistency over availability and performance\
> Single point of truth

## Vertical partitioning

Put your data into deferent table and different database
Vertical partitioning is something we almost do naturally thanks to SOA and micro service.

## Horizontal partitioning / Sharding

Put line of same table into deferent place 'shards' by looking at a key. For example the localization to put all east in one bucket and all west data in an other bucket. Cut the read operation by shard.

Balance the load against shards: `Consistent hashing`

> Tradeoffs: Consistency, Hard join, loose transaction

## Availability

    - Master slave strategy
    - Replication

# Servers

## SOA / Micro services
Micro services vs Monolithic
Monolith good:
Advantages:

- Small team cohesive
- Less complex don’t have to take care of splitting wish can have huge impact if no done properly
- Deployment can be easier
- Less duplication or dependency to maintain
- Can be faster because your not going through the network
  
Disadvantages

- More context required for new members
- Too much responsibility on the server hard to scale one part
- Single point of failure
- Scalability
- Working in parallels

Micro services:

- Micro need a good understanding of the domain
- Takle communication between services
- Need of a composition


## Load balancing / Gateways


# Communication

Protocols:

- HTTP: Hypertext Transfer Protocol, standard of the communication for the web. **Client, Server based architecture**. 

- Web socket: This is a communications protocol providing full-duplex communication channels over a single TCP connection

- XMPP: Peer to peer protocol


Polling:
The front ask the back every X sec for a response


# Files

## Blob storage / File storage

Blob storage (It’s store your file into your database)

- Low latency
- High performance
- Redundancy
- Database is good for indexing, mutability, transaction which are useless in case of files
  
File system

- Highly scalable (CDN)
- Accessible to multiple runtime
- Simultaneous read and right from multiple users
- Cheaper no database or service

## Distributed file system (DFS)

## CDN
 Is a geographically distributed. The goal is to provide high availability and performance by distributing the service spatially relative to end users.

Two modes:

- **Pull**: (Lazy loaded) the CDN manage to get the content after the first visit
- **Push**: (Eager loaded) the application is in charge of pushing the content to the CDN

Chat app:

We want a gateway multiple people connect to this gateway and another service manage the session and know wish people is connected to wish gateway. The session service is also a router that is gonna route the message to the other gateway


# Caching

Use to save network call
Use to save computation like calculate the average …
Save database load

Issues:
Call trashing : constantly input and output from the cache => highly inefficient
Consistency


Cache for static assets (CDN) 
Cache preconmputed calculation (memoization)
Use client storage (browser storage)

So caching can occur at multiple points or levels in the system, including at the hardware (CPU) level.

## Cache location

- In memory cache: Cache on the server
- Distributed cache: Cache between sever and database. You steel have
> Tradeoffs: network latency / consistency across server / scalability

Distributed cache Having a distributed global cache between server and database: Redis Slower but consistent also you can scale your distributed cache

## Cache policy

LRU : Least recently used
Sliding window


## Cache access pattern
Wright through: In write through, data is simultaneously updated to cache and memory.
Write back: The data is updated only in the cache and updated into the memory in later time.
Write around: Using the write-around policy, data is written only to the backing store without writing to the cache. So, I/O completion is confirmed as soon as the data is written to the backing store.

