//list of books that are at least 100 years old
//first sorted fiction vs non-fiction
//second sorted by genre
//third sorted by long or short (page length)
//each book: title, author, publication date, page number and a short summary

export const BOOKS = {
    
        nonFiction: {
            philosophy: {
                short: [
                    {
                        title: "Meditations",
                        author: "Marcus Aurelius",
                        publicationDate: "2nd century AD",
                        summary: "A collection of personal writings by the Roman Emperor Marcus Aurelius, offering insights into Stoic philosophy and practical wisdom for living a virtuous life.",
                        pages: "100-150 pages"
                    },
                    {
                        title: "Fear and Trembling",
                        author: "Kierkegaard, Søren",
                        publicationDate: "1843",
                        summary: "Søren Kierkegaard's exploration of faith, ethics, and existentialism through the story of Abraham's willingness to sacrifice his son Isaac.",
                        pages: "100-150 pages"
                    },
                    {
                        title: "The Myth of Sisyphus",
                        author: "Camus, Albert",
                        publicationDate: "1942",
                        summary: "Albert Camus' philosophical essay delving into the concept of the absurd and the search for meaning in an indifferent universe.",
                        pages: "100-150 pages"
                    },
                    {
                        title: "Sophie's World",
                        author: "Gaarder, Jostein",
                        publicationDate: "1991",
                        summary: "Jostein Gaarder's novel intertwining a young girl's journey of philosophical discovery with an exploration of the history of Western philosophy.",
                        pages: "100-150 pages"
                    },
                    {
                        title: "On Liberty",
                        author: "Mill, John Stuart",
                        publicationDate: "1859",
                        summary: "John Stuart Mill's seminal work advocating for individual liberty and freedom of expression in the face of societal and governmental constraints.",
                        pages: "100-150 pages"
                    }
                ],
                long: [
                    {
                        title: "Being and Time",
                        author: "Heidegger, Martin",
                        publicationDate: "1927",
                        summary: "Martin Heidegger's magnum opus exploring the concept of Being and its relation to time, existence, and human experience.",
                        pages: "500-600 pages"
                    },
                    {
                        title: "Critique of Pure Reason",
                        author: "Kant, Immanuel",
                        publicationDate: "1781",
                        summary: "Immanuel Kant's seminal work examining the nature of human knowledge, reason, and metaphysics.",
                        pages: "600-700 pages"
                    },
                    {
                        title: "The Republic",
                        author: "Plato",
                        publicationDate: "c. 380 BCE",
                        summary: "Plato's philosophical dialogue exploring justice, the ideal state, and the nature of the human soul.",
                        pages: "400-500 pages"
                    },
                    {
                        title: "The Phenomenology of Spirit",
                        author: "Hegel, Georg Wilhelm Friedrich",
                        publicationDate: "1807",
                        summary: "Georg Wilhelm Friedrich Hegel's examination of consciousness, self-awareness, and the dialectical process of history.",
                        pages: "600-700 pages"
                    },
                    {
                        title: "Thus Spoke Zarathustra",
                        author: "Nietzsche, Friedrich",
                        publicationDate: "1883",
                        summary: "Friedrich Nietzsche's philosophical novel presenting the teachings of the fictional prophet Zarathustra on the topics of nihilism, the will to power, and the eternal recurrence.",
                        pages: "400-500 pages"
                    }
                ]
            },
            history: {
                short: [
                    {
                        title: "The Prince",
                        author: "Machiavelli, Niccolò",
                        publicationDate: "1532",
                        summary: "Niccolò Machiavelli's seminal work on political philosophy and statecraft. 'The Prince' offers timeless insights into leadership, power dynamics, and the art of governance.",
                        pages: "100-150 pages"
                    },
                    {
                        title: "A Modest Proposal",
                        author: "Swift, Jonathan",
                        publicationDate: "1729",
                        summary: "Jonathan Swift's satirical essay addressing the plight of impoverished Irish families. Through biting wit and irony, Swift proposes a shocking solution to poverty and overpopulation.",
                        pages: "30-50 pages"
                    },
                    {
                        title: "Common Sense",
                        author: "Paine, Thomas",
                        publicationDate: "1776",
                        summary: "Thomas Paine's influential pamphlet advocating for American independence from British rule. 'Common Sense' argued for republican government and inspired widespread support for the Revolutionary War.",
                        pages: "50-100 pages"
                    },
                    {
                        title: "The Communist Manifesto",
                        author: "Marx, Karl; Engels, Friedrich",
                        publicationDate: "1848",
                        summary: "Karl Marx and Friedrich Engels' landmark manifesto outlining the principles of communism and calling for proletarian revolution. 'The Communist Manifesto' remains a foundational text of socialist thought.",
                        pages: "50-100 pages"
                    },
                    {
                        title: "Narrative of the Life of Frederick Douglass, an American Slave",
                        author: "Douglass, Frederick",
                        publicationDate: "1845",
                        summary: "Frederick Douglass' autobiography recounting his journey from slavery to freedom and his relentless fight for abolition and civil rights. Douglass' narrative exposes the brutality of slavery and the resilience of the human spirit.",
                        pages: "100-150 pages"
                    }
                ],
                long: [
                    {
                        title: "The Decline and Fall of the Roman Empire",
                        author: "Gibbon, Edward",
                        publicationDate: "1776-1789",
                        summary: "Edward Gibbon's monumental work tracing the history of the Roman Empire from its peak to its collapse. 'The Decline and Fall of the Roman Empire' offers a comprehensive account of political, social, and religious factors contributing to the empire's decline.",
                        pages: "3000 pages"
                    },
                    {
                        title: "The Histories",
                        author: "Herodotus",
                        publicationDate: "5th century BC",
                        summary: "Herodotus' seminal work often considered the first true historical account. 'The Histories' explores the Greco-Persian Wars and provides invaluable insights into ancient cultures, customs, and geography.",
                        pages: "800 pages"
                    },
                    {
                        title: "The Rise and Fall of the Third Reich",
                        author: "Shirer, William L.",
                        publicationDate: "1960",
                        summary: "William L. Shirer's comprehensive narrative detailing the history of Nazi Germany from its inception to its defeat in World War II. 'The Rise and Fall of the Third Reich' examines Hitler's rise to power, Nazi ideology, and the war's aftermath.",
                        pages: "1500 pages"
                    },
                    {
                        title: "A History of the English-Speaking Peoples",
                        author: "Churchill, Winston",
                        publicationDate: "1956-1958",
                        summary: "Winston Churchill's four-volume series tracing the history of the English-speaking world from ancient times to the 20th century. 'A History of the English-Speaking Peoples' offers Churchill's insightful perspective on key events and personalities that shaped history.",
                        pages: "2000 pages"
                    },
                    {
                        title: "The Guns of August",
                        author: "Tuchman, Barbara W.",
                        publicationDate: "1962",
                        summary: "Barbara W. Tuchman's Pulitzer Prize-winning account of the events leading up to World War I. 'The Guns of August' vividly portrays the political tensions, military strategies, and diplomatic maneuvers that culminated in the outbreak of the Great War.",
                        pages: "500 pages"
                    }
                ]
            },
            biography: {
                short: [
                    {
                        title: "Narrative of the Life of Frederick Douglass, an American Slave",
                        author: "Douglass, Frederick",
                        publicationDate: "1845",
                        summary: "An autobiographical account of Frederick Douglass's life as a slave and his journey to freedom. Douglass vividly describes the harsh realities of slavery, his efforts to educate himself, and his eventual escape to the North.",
                        pages: "100-150 pages"
                    },
                    {
                        title: "The Autobiography of Benjamin Franklin",
                        author: "Franklin, Benjamin",
                        publicationDate: "1791",
                        summary: "Benjamin Franklin's memoir detailing his life from his early years to his later achievements as a statesman, inventor, and diplomat. Franklin reflects on his experiences, offering insights into his character and philosophy.",
                        pages: "150-200 pages"
                    },
                    {
                        title: "The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African: Written By Himself",
                        author: "Equiano, Olaudah",
                        publicationDate: "1789",
                        summary: "Olaudah Equiano's memoir recounting his experiences as a slave in Africa and the Caribbean, his journey to freedom, and his advocacy for the abolition of the slave trade. Equiano's narrative sheds light on the horrors of slavery and the resilience of the human spirit.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "The Life and Adventures of Robinson Crusoe",
                        author: "Defoe, Daniel",
                        publicationDate: "1719",
                        summary: "A fictionalized autobiography of Robinson Crusoe, a castaway who spends years on a deserted island. Defoe's narrative explores themes of survival, self-reliance, and redemption, inspired by real-life accounts of shipwrecks and survival.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "Walden, and On The Duty Of Civil Disobedience",
                        author: "Thoreau, Henry David",
                        publicationDate: "1854",
                        summary: "Henry David Thoreau's reflections on simple living in natural surroundings during his two-year stay at Walden Pond. Thoreau explores themes of self-reliance, individualism, and the pursuit of a meaningful life.",
                        pages: "150-200 pages"
                    }
                ],
                long: [
                    {
                        title: "The Autobiography of Benjamin Franklin",
                        author: "Franklin, Benjamin",
                        publicationDate: "1791",
                        summary: "Benjamin Franklin's memoir detailing his life from his early years to his later achievements as a statesman, inventor, and diplomat. Franklin reflects on his experiences, offering insights into his character and philosophy.",
                        pages: "400-500 pages"
                    },
                    {
                        title: "The Life of Samuel Johnson",
                        author: "Boswell, James",
                        publicationDate: "1791",
                        summary: "James Boswell's biography of the renowned English writer and lexicographer Samuel Johnson. Boswell provides a comprehensive account of Johnson's life, friendships, and literary achievements, offering a vivid portrait of one of the most influential figures of the 18th century.",
                        pages: "700-800 pages"
                    },
                    {
                        title: "My Bondage and My Freedom",
                        author: "Douglass, Frederick",
                        publicationDate: "1855",
                        summary: "Frederick Douglass's expanded autobiography, which delves deeper into his experiences as a slave and his journey to freedom. Douglass reflects on the complexities of race, identity, and the struggle for equality in antebellum America.",
                        pages: "500-600 pages"
                    },
                    {
                        title: "The Life of Charlotte Brontë",
                        author: "Gaskell, Elizabeth",
                        publicationDate: "1857",
                        summary: "Elizabeth Gaskell's biography of the renowned author Charlotte Brontë, known for her novel 'Jane Eyre.' Gaskell offers insights into Brontë's life, literary influences, and the challenges she faced as a woman writer in the 19th century.",
                        pages: "600-700 pages"
                    },
                    {
                        title: "Einstein: His Life and Universe",
                        author: "Isaacson, Walter",
                        publicationDate: "2007",
                        summary: "Walter Isaacson's comprehensive biography of the iconic physicist Albert Einstein. Drawing on Einstein's personal letters, papers, and interviews, Isaacson explores Einstein's scientific achievements, his complex personal life, and his enduring legacy.",
                        pages: "700-800 pages"
                    }
                ]
            }
        },
    fiction: {
            romantic: {
                short: [
                    {
                        title: "Romeo and Juliet",
                        author: "Shakespeare, William",
                        publicationDate: "1597",
                        summary: "A timeless tale of star-crossed lovers, Romeo and Juliet, who defy the feud between their families for the sake of their love. Set in Verona, Italy, this tragic romance explores themes of love, fate, and the consequences of impulsive decisions.",
                        pages: "100-150 pages"
                    },
                    {
                        title: "Pride and Prejudice",
                        author: "Austen, Jane",
                        publicationDate: "1813",
                        summary: "A classic romance novel that follows the tumultuous relationship between Elizabeth Bennet and Mr. Darcy. Filled with wit, social commentary, and memorable characters, 'Pride and Prejudice' is a beloved masterpiece of English literature.",
                        pages: "250-300 pages"
                    },
                    {
                        title: "Sense and Sensibility",
                        author: "Austen, Jane",
                        publicationDate: "1811",
                        summary: "The story of two sisters, Elinor and Marianne Dashwood, as they navigate the complexities of love and heartbreak. 'Sense and Sensibility' contrasts the reserved and practical Elinor with the passionate and impulsive Marianne, exploring the balance between reason and emotion in matters of love.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "Emma",
                        author: "Austen, Jane",
                        publicationDate: "1815",
                        summary: "A witty and charming novel that follows the misadventures of Emma Woodhouse, a well-meaning but misguided matchmaker. Set in the fictional village of Highbury, 'Emma' explores the pitfalls of romance and the importance of self-awareness and humility in matters of the heart.",
                        pages: "300-350 pages"
                    },
                    {
                        title: "Northanger Abbey",
                        author: "Austen, Jane",
                        publicationDate: "1817",
                        summary: "A satirical romance novel that follows Catherine Morland, an impressionable young woman who discovers the pitfalls of romantic fantasies. Set in Bath, England, 'Northanger Abbey' humorously parodies the Gothic novels popular during Austen's time.",
                        pages: "200-250 pages"
                    }
                ],
                long: [
                    {
                        title: "Jane Eyre",
                        author: "Bronte, Charlotte",
                        publicationDate: "1847",
                        summary: "The story of an orphaned governess who finds love and independence against the backdrop of Thornfield Hall. 'Jane Eyre' explores themes of class, morality, and the search for belonging as its titular heroine discovers her own strength and resilience in the face of adversity.",
                        pages: "400-500 pages"
                    },
                    {
                        title: "Wuthering Heights",
                        author: "Bronte, Emily",
                        publicationDate: "1847",
                        summary: "A tale of passion, revenge, and doomed love on the Yorkshire moors. 'Wuthering Heights' follows the tumultuous relationship between Catherine Earnshaw and Heathcliff, whose intense bond transcends social barriers but is ultimately consumed by jealousy and vengeance.",
                        pages: "300-400 pages"
                    },
                    {
                        title: "The Count of Monte Cristo",
                        author: "Dumas, Alexandre",
                        publicationDate: "1844",
                        summary: "A tale of betrayal, revenge, and redemption set in early 19th-century France and Italy. It follows the journey of Edmond Dantès, a young sailor who is wrongfully imprisoned and seeks vengeance against those who betrayed him.",
                        pages: "800-900 pages"
                    },
                    {
                        title: "North and South",
                        author: "Gaskell, Elizabeth",
                        publicationDate: "1855",
                        summary: "A social novel set in Victorian England, 'North and South' explores the contrasts between the industrial North and the rural South through the eyes of Margaret Hale. As Margaret navigates love, class conflict, and personal growth, she confronts the complexities of society and her own values.",
                        pages: "500-600 pages"
                    },
                    {
                        title: "Middlemarch",
                        author: "Eliot, George",
                        publicationDate: "1871",
                        summary: "A panoramic novel that chronicles the lives of the inhabitants of the fictional town of Middlemarch. Through intertwining storylines, 'Middlemarch' explores themes of love, ambition, and social change in 19th-century England, offering a rich tapestry of characters and relationships.",
                        pages: "700-800 pages"
                    }
                ]
            },
            mystery: {
                short: [
                    {
                        title: "The Murders in the Rue Morgue",
                        author: "Poe, Edgar Allan",
                        publicationDate: "1841",
                        summary: "Considered one of the first detective stories, 'The Murders in the Rue Morgue' follows C. Auguste Dupin, a brilliant amateur detective, as he investigates a series of brutal murders in Paris. Dupin's keen powers of observation and deduction are put to the test as he unravels the mystery behind the seemingly inexplicable crimes.",
                        pages: "20-40 pages"
                    },
                    {
                        title: "The Moonstone",
                        author: "Collins, Wilkie",
                        publicationDate: "1868",
                        summary: "Regarded as one of the first detective novels in English literature, 'The Moonstone' revolves around the theft of a valuable diamond, the Moonstone, from an English country estate. The story unfolds through multiple narrators and intertwining plotlines, keeping readers guessing until the thrilling conclusion.",
                        pages: "500-600 pages"
                    },
                    {
                        title: "The Maltese Falcon",
                        author: "Hammett, Dashiell",
                        publicationDate: "1930",
                        summary: "Private investigator Sam Spade becomes embroiled in a complex case involving a priceless statuette of a falcon. As Spade navigates a web of lies, betrayal, and murder, he must outwit dangerous adversaries and uncover the truth behind the elusive Maltese Falcon.",
                        pages: "200-300 pages"
                    },
                    {
                        title: "The Adventures of Sherlock Holmes",
                        author: "Doyle, Arthur Conan",
                        publicationDate: "1892",
                        summary: "A collection of twelve short stories featuring the famous detective Sherlock Holmes and his loyal companion Dr. John Watson. From solving intricate mysteries to outwitting cunning criminals, Holmes demonstrates his remarkable deductive skills in each thrilling adventure.",
                        pages: "150-200 pages"
                    },
                    {
                        title: "The Hound of the Baskervilles",
                        author: "Doyle, Arthur Conan",
                        publicationDate: "1902",
                        summary: "Sherlock Holmes and Dr. John Watson are tasked with investigating the mysterious death of Sir Charles Baskerville, whose demise is attributed to a supernatural hound that haunts the Baskerville family. As they delve deeper into the case, they uncover a web of intrigue and deception surrounding the Baskerville estate.",
                        pages: "200-250 pages"
                    }
                ],
                long: [
                    {
                        title: "The Woman in White",
                        author: "Collins, Wilkie",
                        publicationDate: "1860",
                        summary: "A gripping tale of mystery, mistaken identity, and madness. 'The Woman in White' follows the intertwining lives of Walter Hartright, a drawing master, and the enigmatic Laura Fairlie. As they uncover dark secrets and encounter sinister characters, they become entangled in a web of deception and danger.",
                        pages: "600-700 pages"
                    },
                    {
                        title: "And Then There Were None",
                        author: "Christie, Agatha",
                        publicationDate: "1939",
                        summary: "Ten strangers are invited to a remote island under mysterious circumstances. As they gather, they realize they have been brought together by a hidden host with a deadly agenda. With no means of escape, they must uncover the identity of their assailant before they become the next victims in this chilling and suspenseful tale.",
                        pages: "300-350 pages"
                    },
                    {
                        title: "The Name of the Rose",
                        author: "Eco, Umberto",
                        publicationDate: "1980",
                        summary: "Set in a medieval monastery, 'The Name of the Rose' follows Franciscan friar William of Baskerville and his novice Adso of Melk as they investigate a series of murders. As they delve deeper into the labyrinthine corridors of the monastery, they encounter forbidden knowledge, political intrigue, and deadly secrets.",
                        pages: "500-600 pages"
                    },
                    {
                        title: "The Big Sleep",
                        author: "Chandler, Raymond",
                        publicationDate: "1939",
                        summary: "Private detective Philip Marlowe is hired by wealthy General Sternwood to investigate a case of blackmail involving his daughter Carmen. Marlowe soon finds himself entangled in a web of deception, double-crosses, and murder as he navigates the seedy underbelly of 1930s Los Angeles.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "The Adventures of Sherlock Holmes",
                        author: "Doyle, Arthur Conan",
                        publicationDate: "1892",
                        summary: "A collection of twelve short stories featuring the famous detective Sherlock Holmes and his loyal companion Dr. John Watson. From solving intricate mysteries to outwitting cunning criminals, Holmes demonstrates his remarkable deductive skills in each thrilling adventure.",
                        pages: "150-200 pages"
                    }
                ]
            },
            adventure: {
                short: [
                    {
                        title: "The Adventures of Tom Sawyer",
                        author: "Twain, Mark",
                        publicationDate: "1876",
                        summary: "Follows the adventures of a young boy named Tom Sawyer as he navigates through his childhood in the Mississippi River town of St. Petersburg. From exploring caves to attending his own funeral, Tom's escapades are both humorous and poignant.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "The Adventures of Huckleberry Finn",
                        author: "Twain, Mark",
                        publicationDate: "1884",
                        summary: "The sequel to 'The Adventures of Tom Sawyer,' this novel follows the journey of Huckleberry Finn, an escaped slave named Jim, and Huck's companion Tom Sawyer as they travel down the Mississippi River on a raft. Along the way, they encounter various characters and confront issues of race, freedom, and morality.",
                        pages: "300-350 pages"
                    },
                    {
                        title: "Treasure Island",
                        author: "Stevenson, Robert Louis",
                        publicationDate: "1883",
                        summary: "A classic tale of pirates, treasure, and adventure. When young Jim Hawkins discovers a treasure map in the chest of a deceased sailor, he embarks on a perilous journey to find the legendary treasure of Captain Flint, encountering treacherous pirates led by the one-legged Long John Silver.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
                        author: "Stevenson, Robert Louis",
                        publicationDate: "1886",
                        summary: "A gripping story of duality and the battle between good and evil. Dr. Jekyll, a respected scientist, creates a potion that transforms him into the sinister Mr. Hyde. As Hyde's influence grows stronger, Dr. Jekyll struggles to control his alter ego and the havoc he wreaks.",
                        pages: "50-100 pages"
                    },
                    {
                        title: "The Jungle Book",
                        author: "Kipling, Rudyard",
                        publicationDate: "1894",
                        summary: "A collection of stories set in the Indian jungle and centered around Mowgli, a boy raised by wolves. Mowgli interacts with various jungle animals, including Baloo the bear and Bagheera the panther, while facing the challenges of survival and his identity.",
                        pages: "150-200 pages"
                    }
                ],
                long: [
                    {
                        title: "The Count of Monte Cristo",
                        author: "Dumas, Alexandre",
                        publicationDate: "1844",
                        summary: "A tale of betrayal, revenge, and redemption set in early 19th-century France and Italy. It follows the journey of Edmond Dantès, a young sailor who is wrongfully imprisoned and seeks vengeance against those who betrayed him.",
                        pages: "1000-1100 pages"
                    },
                    {
                        title: "Moby Dick; Or, The Whale",
                        author: "Melville, Herman",
                        publicationDate: "1851",
                        summary: "An epic tale of obsession and revenge. Captain Ahab, driven by his quest for vengeance against the giant white whale that took his leg, leads his crew on a perilous journey across the seas. Along the way, they face storms, mutiny, and the unforgiving forces of nature.",
                        pages: "600-700 pages"
                    },
                    {
                        title: "Robinson Crusoe",
                        author: "Defoe, Daniel",
                        publicationDate: "1719",
                        summary: "The timeless story of a man shipwrecked on a deserted island and his struggle for survival. Robinson Crusoe must use his ingenuity and resourcefulness to build shelter, find food, and fend off dangers, including hostile natives and wild animals.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "Gulliver's Travels into Several Remote Nations of the World",
                        author: "Swift, Jonathan",
                        publicationDate: "1726",
                        summary: "The novel follows Lemuel Gulliver's adventures in several imaginary lands. In each, Gulliver finds himself in absurd situations, encountering giants, miniature people, talking horses, and irrational societies, offering satirical commentary on human nature and society.",
                        pages: "200-250 pages"
                    },
                    {
                        title: "The Adventures of Sherlock Holmes",
                        author: "Doyle, Arthur Conan",
                        publicationDate: "1892",
                        summary: "A collection of twelve short stories featuring the famous detective Sherlock Holmes and his loyal companion Dr. John Watson. From solving intricate mysteries to outwitting cunning criminals, Holmes demonstrates his remarkable deductive skills in each thrilling adventure.",
                        pages: "300-350 pages"
                    }
                ]
            }
    }
};

export const LENGTH = {
        short: [
            {
                title: "Meditations",
                author: "Marcus Aurelius",
                publicationDate: "2nd century AD",
                summary: "A collection of personal writings by the Roman Emperor Marcus Aurelius, offering insights into Stoic philosophy and practical wisdom for living a virtuous life.",
                pages: "100-150 pages"
            },
            {
                title: "Fear and Trembling",
                author: "Kierkegaard, Søren",
                publicationDate: "1843",
                summary: "Søren Kierkegaard's exploration of faith, ethics, and existentialism through the story of Abraham's willingness to sacrifice his son Isaac.",
                pages: "100-150 pages"
            },
            {
                title: "The Myth of Sisyphus",
                author: "Camus, Albert",
                publicationDate: "1942",
                summary: "Albert Camus' philosophical essay delving into the concept of the absurd and the search for meaning in an indifferent universe.",
                pages: "100-150 pages"
            },
            {
                title: "Sophie's World",
                author: "Gaarder, Jostein",
                publicationDate: "1991",
                summary: "Jostein Gaarder's novel intertwining a young girl's journey of philosophical discovery with an exploration of the history of Western philosophy.",
                pages: "100-150 pages"
            },
            {
                title: "On Liberty",
                author: "Mill, John Stuart",
                publicationDate: "1859",
                summary: "John Stuart Mill's seminal work advocating for individual liberty and freedom of expression in the face of societal and governmental constraints.",
                pages: "100-150 pages"
            },
            {
                    title: "The Prince",
                    author: "Machiavelli, Niccolò",
                    publicationDate: "1532",
                    summary: "Niccolò Machiavelli's seminal work on political philosophy and statecraft. 'The Prince' offers timeless insights into leadership, power dynamics, and the art of governance.",
                    pages: "100-150 pages"
                },
                {
                    title: "A Modest Proposal",
                    author: "Swift, Jonathan",
                    publicationDate: "1729",
                    summary: "Jonathan Swift's satirical essay addressing the plight of impoverished Irish families. Through biting wit and irony, Swift proposes a shocking solution to poverty and overpopulation.",
                    pages: "30-50 pages"
                },
                {
                    title: "Common Sense",
                    author: "Paine, Thomas",
                    publicationDate: "1776",
                    summary: "Thomas Paine's influential pamphlet advocating for American independence from British rule. 'Common Sense' argued for republican government and inspired widespread support for the Revolutionary War.",
                    pages: "50-100 pages"
                },
                {
                    title: "The Communist Manifesto",
                    author: "Marx, Karl; Engels, Friedrich",
                    publicationDate: "1848",
                    summary: "Karl Marx and Friedrich Engels' landmark manifesto outlining the principles of communism and calling for proletarian revolution. 'The Communist Manifesto' remains a foundational text of socialist thought.",
                    pages: "50-100 pages"
                },
                {
                    title: "Narrative of the Life of Frederick Douglass, an American Slave",
                    author: "Douglass, Frederick",
                    publicationDate: "1845",
                    summary: "Frederick Douglass' autobiography recounting his journey from slavery to freedom and his relentless fight for abolition and civil rights. Douglass' narrative exposes the brutality of slavery and the resilience of the human spirit.",
                    pages: "100-150 pages"
                },
                {
                    title: "Narrative of the Life of Frederick Douglass, an American Slave",
                    author: "Douglass, Frederick",
                    publicationDate: "1845",
                    summary: "An autobiographical account of Frederick Douglass's life as a slave and his journey to freedom. Douglass vividly describes the harsh realities of slavery, his efforts to educate himself, and his eventual escape to the North.",
                    pages: "100-150 pages"
                },
                {
                    title: "The Autobiography of Benjamin Franklin",
                    author: "Franklin, Benjamin",
                    publicationDate: "1791",
                    summary: "Benjamin Franklin's memoir detailing his life from his early years to his later achievements as a statesman, inventor, and diplomat. Franklin reflects on his experiences, offering insights into his character and philosophy.",
                    pages: "150-200 pages"
                },
                {
                    title: "The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African: Written By Himself",
                    author: "Equiano, Olaudah",
                    publicationDate: "1789",
                    summary: "Olaudah Equiano's memoir recounting his experiences as a slave in Africa and the Caribbean, his journey to freedom, and his advocacy for the abolition of the slave trade. Equiano's narrative sheds light on the horrors of slavery and the resilience of the human spirit.",
                    pages: "200-250 pages"
                },
                {
                    title: "The Life and Adventures of Robinson Crusoe",
                    author: "Defoe, Daniel",
                    publicationDate: "1719",
                    summary: "A fictionalized autobiography of Robinson Crusoe, a castaway who spends years on a deserted island. Defoe's narrative explores themes of survival, self-reliance, and redemption, inspired by real-life accounts of shipwrecks and survival.",
                    pages: "200-250 pages"
                },
                {
                    title: "Walden, and On The Duty Of Civil Disobedience",
                    author: "Thoreau, Henry David",
                    publicationDate: "1854",
                    summary: "Henry David Thoreau's reflections on simple living in natural surroundings during his two-year stay at Walden Pond. Thoreau explores themes of self-reliance, individualism, and the pursuit of a meaningful life.",
                    pages: "150-200 pages"
                },
                {
                    title: "Romeo and Juliet",
                    author: "Shakespeare, William",
                    publicationDate: "1597",
                    summary: "A timeless tale of star-crossed lovers, Romeo and Juliet, who defy the feud between their families for the sake of their love. Set in Verona, Italy, this tragic romance explores themes of love, fate, and the consequences of impulsive decisions.",
                    pages: "100-150 pages"
                },
                {
                    title: "Pride and Prejudice",
                    author: "Austen, Jane",
                    publicationDate: "1813",
                    summary: "A classic romance novel that follows the tumultuous relationship between Elizabeth Bennet and Mr. Darcy. Filled with wit, social commentary, and memorable characters, 'Pride and Prejudice' is a beloved masterpiece of English literature.",
                    pages: "250-300 pages"
                },
                {
                    title: "Sense and Sensibility",
                    author: "Austen, Jane",
                    publicationDate: "1811",
                    summary: "The story of two sisters, Elinor and Marianne Dashwood, as they navigate the complexities of love and heartbreak. 'Sense and Sensibility' contrasts the reserved and practical Elinor with the passionate and impulsive Marianne, exploring the balance between reason and emotion in matters of love.",
                    pages: "200-250 pages"
                },
                {
                    title: "Emma",
                    author: "Austen, Jane",
                    publicationDate: "1815",
                    summary: "A witty and charming novel that follows the misadventures of Emma Woodhouse, a well-meaning but misguided matchmaker. Set in the fictional village of Highbury, 'Emma' explores the pitfalls of romance and the importance of self-awareness and humility in matters of the heart.",
                    pages: "300-350 pages"
                },
                {
                    title: "Northanger Abbey",
                    author: "Austen, Jane",
                    publicationDate: "1817",
                    summary: "A satirical romance novel that follows Catherine Morland, an impressionable young woman who discovers the pitfalls of romantic fantasies. Set in Bath, England, 'Northanger Abbey' humorously parodies the Gothic novels popular during Austen's time.",
                    pages: "200-250 pages"
                },
                {
                    title: "The Murders in the Rue Morgue",
                    author: "Poe, Edgar Allan",
                    publicationDate: "1841",
                    summary: "Considered one of the first detective stories, 'The Murders in the Rue Morgue' follows C. Auguste Dupin, a brilliant amateur detective, as he investigates a series of brutal murders in Paris. Dupin's keen powers of observation and deduction are put to the test as he unravels the mystery behind the seemingly inexplicable crimes.",
                    pages: "20-40 pages"
                },
                {
                    title: "The Moonstone",
                    author: "Collins, Wilkie",
                    publicationDate: "1868",
                    summary: "Regarded as one of the first detective novels in English literature, 'The Moonstone' revolves around the theft of a valuable diamond, the Moonstone, from an English country estate. The story unfolds through multiple narrators and intertwining plotlines, keeping readers guessing until the thrilling conclusion.",
                    pages: "500-600 pages"
                },
                {
                    title: "The Maltese Falcon",
                    author: "Hammett, Dashiell",
                    publicationDate: "1930",
                    summary: "Private investigator Sam Spade becomes embroiled in a complex case involving a priceless statuette of a falcon. As Spade navigates a web of lies, betrayal, and murder, he must outwit dangerous adversaries and uncover the truth behind the elusive Maltese Falcon.",
                    pages: "200-300 pages"
                },
                {
                    title: "The Adventures of Sherlock Holmes",
                    author: "Doyle, Arthur Conan",
                    publicationDate: "1892",
                    summary: "A collection of twelve short stories featuring the famous detective Sherlock Holmes and his loyal companion Dr. John Watson. From solving intricate mysteries to outwitting cunning criminals, Holmes demonstrates his remarkable deductive skills in each thrilling adventure.",
                    pages: "150-200 pages"
                },
                {
                    title: "The Hound of the Baskervilles",
                    author: "Doyle, Arthur Conan",
                    publicationDate: "1902",
                    summary: "Sherlock Holmes and Dr. John Watson are tasked with investigating the mysterious death of Sir Charles Baskerville, whose demise is attributed to a supernatural hound that haunts the Baskerville family. As they delve deeper into the case, they uncover a web of intrigue and deception surrounding the Baskerville estate.",
                    pages: "200-250 pages"
                },
                {
                    title: "The Adventures of Tom Sawyer",
                    author: "Twain, Mark",
                    publicationDate: "1876",
                    summary: "Follows the adventures of a young boy named Tom Sawyer as he navigates through his childhood in the Mississippi River town of St. Petersburg. From exploring caves to attending his own funeral, Tom's escapades are both humorous and poignant.",
                    pages: "200-250 pages"
                },
                {
                    title: "The Adventures of Huckleberry Finn",
                    author: "Twain, Mark",
                    publicationDate: "1884",
                    summary: "The sequel to 'The Adventures of Tom Sawyer,' this novel follows the journey of Huckleberry Finn, an escaped slave named Jim, and Huck's companion Tom Sawyer as they travel down the Mississippi River on a raft. Along the way, they encounter various characters and confront issues of race, freedom, and morality.",
                    pages: "300-350 pages"
                },
                {
                    title: "Treasure Island",
                    author: "Stevenson, Robert Louis",
                    publicationDate: "1883",
                    summary: "A classic tale of pirates, treasure, and adventure. When young Jim Hawkins discovers a treasure map in the chest of a deceased sailor, he embarks on a perilous journey to find the legendary treasure of Captain Flint, encountering treacherous pirates led by the one-legged Long John Silver.",
                    pages: "200-250 pages"
                },
                {
                    title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
                    author: "Stevenson, Robert Louis",
                    publicationDate: "1886",
                    summary: "A gripping story of duality and the battle between good and evil. Dr. Jekyll, a respected scientist, creates a potion that transforms him into the sinister Mr. Hyde. As Hyde's influence grows stronger, Dr. Jekyll struggles to control his alter ego and the havoc he wreaks.",
                    pages: "50-100 pages"
                },
                {
                    title: "The Jungle Book",
                    author: "Kipling, Rudyard",
                    publicationDate: "1894",
                    summary: "A collection of stories set in the Indian jungle and centered around Mowgli, a boy raised by wolves. Mowgli interacts with various jungle animals, including Baloo the bear and Bagheera the panther, while facing the challenges of survival and his identity.",
                    pages: "150-200 pages"
                }
            ],
            long: [
                {
                    title: "Being and Time",
                    author: "Heidegger, Martin",
                    publicationDate: "1927",
                    summary: "Martin Heidegger's magnum opus exploring the concept of Being and its relation to time, existence, and human experience.",
                    pages: "500-600 pages"
                },
                {
                    title: "Critique of Pure Reason",
                    author: "Kant, Immanuel",
                    publicationDate: "1781",
                    summary: "Immanuel Kant's seminal work examining the nature of human knowledge, reason, and metaphysics.",
                    pages: "600-700 pages"
                },
                {
                    title: "The Republic",
                    author: "Plato",
                    publicationDate: "c. 380 BCE",
                    summary: "Plato's philosophical dialogue exploring justice, the ideal state, and the nature of the human soul.",
                    pages: "400-500 pages"
                },
                {
                    title: "The Phenomenology of Spirit",
                    author: "Hegel, Georg Wilhelm Friedrich",
                    publicationDate: "1807",
                    summary: "Georg Wilhelm Friedrich Hegel's examination of consciousness, self-awareness, and the dialectical process of history.",
                    pages: "600-700 pages"
                },
                {
                    title: "Thus Spoke Zarathustra",
                    author: "Nietzsche, Friedrich",
                    publicationDate: "1883",
                    summary: "Friedrich Nietzsche's philosophical novel presenting the teachings of the fictional prophet Zarathustra on the topics of nihilism, the will to power, and the eternal recurrence.",
                    pages: "400-500 pages"
                },
                {
                    title: "The Decline and Fall of the Roman Empire",
                    author: "Gibbon, Edward",
                    publicationDate: "1776-1789",
                    summary: "Edward Gibbon's monumental work tracing the history of the Roman Empire from its peak to its collapse. 'The Decline and Fall of the Roman Empire' offers a comprehensive account of political, social, and religious factors contributing to the empire's decline.",
                    pages: "3000 pages"
                },
                {
                    title: "The Histories",
                    author: "Herodotus",
                    publicationDate: "5th century BC",
                    summary: "Herodotus' seminal work often considered the first true historical account. 'The Histories' explores the Greco-Persian Wars and provides invaluable insights into ancient cultures, customs, and geography.",
                    pages: "800 pages"
                },
                {
                    title: "The Rise and Fall of the Third Reich",
                    author: "Shirer, William L.",
                    publicationDate: "1960",
                    summary: "William L. Shirer's comprehensive narrative detailing the history of Nazi Germany from its inception to its defeat in World War II. 'The Rise and Fall of the Third Reich' examines Hitler's rise to power, Nazi ideology, and the war's aftermath.",
                    pages: "1500 pages"
                },
                {
                    title: "A History of the English-Speaking Peoples",
                    author: "Churchill, Winston",
                    publicationDate: "1956-1958",
                    summary: "Winston Churchill's four-volume series tracing the history of the English-speaking world from ancient times to the 20th century. 'A History of the English-Speaking Peoples' offers Churchill's insightful perspective on key events and personalities that shaped history.",
                    pages: "2000 pages"
                },
                {
                    title: "The Guns of August",
                    author: "Tuchman, Barbara W.",
                    publicationDate: "1962",
                    summary: "Barbara W. Tuchman's Pulitzer Prize-winning account of the events leading up to World War I. 'The Guns of August' vividly portrays the political tensions, military strategies, and diplomatic maneuvers that culminated in the outbreak of the Great War.",
                    pages: "500 pages"
                },
                {
                    title: "The Autobiography of Benjamin Franklin",
                    author: "Franklin, Benjamin",
                    publicationDate: "1791",
                    summary: "Benjamin Franklin's memoir detailing his life from his early years to his later achievements as a statesman, inventor, and diplomat. Franklin reflects on his experiences, offering insights into his character and philosophy.",
                    pages: "400-500 pages"
                },
                {
                    title: "The Life of Samuel Johnson",
                    author: "Boswell, James",
                    publicationDate: "1791",
                    summary: "James Boswell's biography of the renowned English writer and lexicographer Samuel Johnson. Boswell provides a comprehensive account of Johnson's life, friendships, and literary achievements, offering a vivid portrait of one of the most influential figures of the 18th century.",
                    pages: "700-800 pages"
                },
                {
                    title: "My Bondage and My Freedom",
                    author: "Douglass, Frederick",
                    publicationDate: "1855",
                    summary: "Frederick Douglass's expanded autobiography, which delves deeper into his experiences as a slave and his journey to freedom. Douglass reflects on the complexities of race, identity, and the struggle for equality in antebellum America.",
                    pages: "500-600 pages"
                },
                {
                    title: "The Life of Charlotte Brontë",
                    author: "Gaskell, Elizabeth",
                    publicationDate: "1857",
                    summary: "Elizabeth Gaskell's biography of the renowned author Charlotte Brontë, known for her novel 'Jane Eyre.' Gaskell offers insights into Brontë's life, literary influences, and the challenges she faced as a woman writer in the 19th century.",
                    pages: "600-700 pages"
                },
                {
                    title: "Einstein: His Life and Universe",
                    author: "Isaacson, Walter",
                    publicationDate: "2007",
                    summary: "Walter Isaacson's comprehensive biography of the iconic physicist Albert Einstein. Drawing on Einstein's personal letters, papers, and interviews, Isaacson explores Einstein's scientific achievements, his complex personal life, and his enduring legacy.",
                    pages: "700-800 pages"
                },
                {
                    title: "Jane Eyre",
                    author: "Bronte, Charlotte",
                    publicationDate: "1847",
                    summary: "The story of an orphaned governess who finds love and independence against the backdrop of Thornfield Hall. 'Jane Eyre' explores themes of class, morality, and the search for belonging as its titular heroine discovers her own strength and resilience in the face of adversity.",
                    pages: "400-500 pages"
                },
                {
                    title: "Wuthering Heights",
                    author: "Bronte, Emily",
                    publicationDate: "1847",
                    summary: "A tale of passion, revenge, and doomed love on the Yorkshire moors. 'Wuthering Heights' follows the tumultuous relationship between Catherine Earnshaw and Heathcliff, whose intense bond transcends social barriers but is ultimately consumed by jealousy and vengeance.",
                    pages: "300-400 pages"
                },
                {
                    title: "The Count of Monte Cristo",
                    author: "Dumas, Alexandre",
                    publicationDate: "1844",
                    summary: "A tale of betrayal, revenge, and redemption set in early 19th-century France and Italy. It follows the journey of Edmond Dantès, a young sailor who is wrongfully imprisoned and seeks vengeance against those who betrayed him.",
                    pages: "800-900 pages"
                },
                {
                    title: "North and South",
                    author: "Gaskell, Elizabeth",
                    publicationDate: "1855",
                    summary: "A social novel set in Victorian England, 'North and South' explores the contrasts between the industrial North and the rural South through the eyes of Margaret Hale. As Margaret navigates love, class conflict, and personal growth, she confronts the complexities of society and her own values.",
                    pages: "500-600 pages"
                },
                {
                    title: "Middlemarch",
                    author: "Eliot, George",
                    publicationDate: "1871",
                    summary: "A panoramic novel that chronicles the lives of the inhabitants of the fictional town of Middlemarch. Through intertwining storylines, 'Middlemarch' explores themes of love, ambition, and social change in 19th-century England, offering a rich tapestry of characters and relationships.",
                    pages: "700-800 pages"
                },
                {
                    title: "The Woman in White",
                    author: "Collins, Wilkie",
                    publicationDate: "1860",
                    summary: "A gripping tale of mystery, mistaken identity, and madness. 'The Woman in White' follows the intertwining lives of Walter Hartright, a drawing master, and the enigmatic Laura Fairlie. As they uncover dark secrets and encounter sinister characters, they become entangled in a web of deception and danger.",
                    pages: "600-700 pages"
                },
                {
                    title: "And Then There Were None",
                    author: "Christie, Agatha",
                    publicationDate: "1939",
                    summary: "Ten strangers are invited to a remote island under mysterious circumstances. As they gather, they realize they have been brought together by a hidden host with a deadly agenda. With no means of escape, they must uncover the identity of their assailant before they become the next victims in this chilling and suspenseful tale.",
                    pages: "300-350 pages"
                },
                {
                    title: "The Name of the Rose",
                    author: "Eco, Umberto",
                    publicationDate: "1980",
                    summary: "Set in a medieval monastery, 'The Name of the Rose' follows Franciscan friar William of Baskerville and his novice Adso of Melk as they investigate a series of murders. As they delve deeper into the labyrinthine corridors of the monastery, they encounter forbidden knowledge, political intrigue, and deadly secrets.",
                    pages: "500-600 pages"
                },
                {
                    title: "The Big Sleep",
                    author: "Chandler, Raymond",
                    publicationDate: "1939",
                    summary: "Private detective Philip Marlowe is hired by wealthy General Sternwood to investigate a case of blackmail involving his daughter Carmen. Marlowe soon finds himself entangled in a web of deception, double-crosses, and murder as he navigates the seedy underbelly of 1930s Los Angeles.",
                    pages: "200-250 pages"
                },
                {
                    title: "The Adventures of Sherlock Holmes",
                    author: "Doyle, Arthur Conan",
                    publicationDate: "1892",
                    summary: "A collection of twelve short stories featuring the famous detective Sherlock Holmes and his loyal companion Dr. John Watson. From solving intricate mysteries to outwitting cunning criminals, Holmes demonstrates his remarkable deductive skills in each thrilling adventure.",
                    pages: "150-200 pages"
                },
                {
                    title: "The Count of Monte Cristo",
                    author: "Dumas, Alexandre",
                    publicationDate: "1844",
                    summary: "A tale of betrayal, revenge, and redemption set in early 19th-century France and Italy. It follows the journey of Edmond Dantès, a young sailor who is wrongfully imprisoned and seeks vengeance against those who betrayed him.",
                    pages: "1000-1100 pages"
                },
                {
                    title: "Moby Dick; Or, The Whale",
                    author: "Melville, Herman",
                    publicationDate: "1851",
                    summary: "An epic tale of obsession and revenge. Captain Ahab, driven by his quest for vengeance against the giant white whale that took his leg, leads his crew on a perilous journey across the seas. Along the way, they face storms, mutiny, and the unforgiving forces of nature.",
                    pages: "600-700 pages"
                },
                {
                    title: "Robinson Crusoe",
                    author: "Defoe, Daniel",
                    publicationDate: "1719",
                    summary: "The timeless story of a man shipwrecked on a deserted island and his struggle for survival. Robinson Crusoe must use his ingenuity and resourcefulness to build shelter, find food, and fend off dangers, including hostile natives and wild animals.",
                    pages: "200-250 pages"
                },
                {
                    title: "Gulliver's Travels into Several Remote Nations of the World",
                    author: "Swift, Jonathan",
                    publicationDate: "1726",
                    summary: "The novel follows Lemuel Gulliver's adventures in several imaginary lands. In each, Gulliver finds himself in absurd situations, encountering giants, miniature people, talking horses, and irrational societies, offering satirical commentary on human nature and society.",
                    pages: "200-250 pages"
                },
                {
                    title: "The Adventures of Sherlock Holmes",
                    author: "Doyle, Arthur Conan",
                    publicationDate: "1892",
                    summary: "A collection of twelve short stories featuring the famous detective Sherlock Holmes and his loyal companion Dr. John Watson. From solving intricate mysteries to outwitting cunning criminals, Holmes demonstrates his remarkable deductive skills in each thrilling adventure.",
                    pages: "300-350 pages"
                }
            ]
};