// Do not edit. Please edit the questions.json file instead

var questions = [
  {
    question: "When is <code>object instanceof Object</code> false?",
    page: 8,
    answer: "<code>object == null</code>"
  },
  {
    question: "When will <code>object1 instanceof type</code> not compile? (Where <code>type instanceof Class</code>)",
    page: 8,
    answer: "<code>type</code> is a class (not an interface) and <code>object1</code> does not directly or indirectly extend it"
  },
  {
    question: "Will this code compile? Why?<br /><code>public interface Mother {}</code><br /><code>class Hippo extends HeavyAnimal {}</code><br /><code>...</code><br /><code>HeavyAnimal hippo = new Hippo();</code><br /><code>hippo instanceof Mother;</code>",
    page: 8,
    answer: "Yes - unlike with classes, the compiler has no way of determining if <code>Hippo</code> implements <code>Mother</code>, as <code>Mother</code> is an interface"
  },
  {
    question: "What is a virtual method?",
    page: 10,
    answer: "A non-static method"
  },
  {
    question: "How does the <code>hashCode()</code> method relate to <code>equals()</code>?",
    page: 10,
    answer: "If <code>obj1.equals(obj2)</code> then <code>obj1.hashCode() == obj2.hashCode()</code>. Therefore, <code>hashCode</code> should only use the fields (or a subset of fields) used in the <code>equals</code> method. However, <code>obj1.hashCode() == obj2.hashCode()</code> does not necessarily infer that <code>obj1.equals(obj2)</code>."
  },
  {
    question: "How is an enum's numeric constant assigned?",
    page: 21,
    answer: "In the order they are declared (from 0)."
  },
  {
    question: "How do you get an enum's numeric constant?",
    page: 22,
    answer: "<code>enumValue.ordinal()</code>"
  },
  {
    question: "Can you extend an enum?",
    page: 22,
    answer: "No"
  },
  {
    question: "What is a nested class?",
    page: 24,
    answer: "A class defined within another class"
  },
  {
    question: "What is an inner class?",
    page: 24,
    answer: "A non-static nested class"
  },
  {
    question: "Which access modifiers can be used for member inner classes?",
    page: 25,
    answer: "All"
  },
  {
    question: "Which classes can be extended by member inner classes?",
    page: 25,
    answer: "Any"
  },
  {
    question: "Which interfaces can be implemented by member inner classes?",
    page: 25,
    answer: "Any"
  },
  {
    question: "Can member inner classes be static and/or final?",
    page: 25,
    answer: "Can be abstract or final"
  },
  {
    question: "Can member inner classes declare static fields or methods?",
    page: 25,
    answer: "No"
  },
  {
    question: "Can member inner classes access members of the outer class?",
    page: 25,
    answer: "Yes. They can access all fields, including private fields"
  },
  {
    question: "From outside the outer class, <code>Outer</code>, how could you create an instance of the inner class, <code>Inner</code>?",
    page: 26,
    answer: "<code>Outer outer = new Outer();</code><br /><code>Inner inner = outer.new Inner();</code>"
  },
  {
    question: "Can members with the same name be created in both an outer class and an inner class?",
    page: 26,
    answer: "Yes"
  },
  {
    question: "How would you retrieve the values for the variable, <code>a</code>, from the outer class, <code>Outer</code>, if the inner class, <code>Inner</code>, also has a member with the same name from <code>Inner</code>?",
    page: 26,
    answer: "<code>Outer.this.a</code>"
  },
  {
    question: "Can an interface be <code>private</code>?",
    page: 27,
    answer: "Yes, if it is declared within a class"
  },
  {
    question: "Which access modifiers can be used for local inner classes?",
    page: 28,
    answer: "None"
  },
  {
    question: "Can local inner classes have static members?",
    page: 28,
    answer: "No"
  },
  {
    question: "Can local inner classes access members of the outer class?",
    page: 28,
    answer: "Yes. They can access all members, including private members."
  },
  {
    question: "Why are fields used in local inner classes required to be final or effectively final?",
    page: 28,
    answer: "A class file is generated for the local inner class, which has no way to reference the method variables. These variables can be passed in via the constructor, or by storing them in the class file, but Java has no way of knowing what they are later changed to"
  },
  {
    question: "How do you import a static nested class?",
    page: 32,
    answer: "Either: <code>import Outer.Inner</code> or <code>import static Outer.Inner</code>"
  },
  {
    question: "Can an interface have variables?",
    page: 48,
    answer: "Yes, but only if they are <code>public</code>, <code>static</code> and <code>final</code>"
  },
  {
    question: "Can an interface contain static methods?",
    page: 48,
    answer: "Yes"
  },
  {
    question: "Why won't this code compile?<br /><code>public interface Truck{default void drive() {}}</code><br /><code>public interface Car {default void drive() {}}</code><br /><code>class Pickup implements Car, Truck{}</code>",
    page: 51,
    answer: "The class implements two interfaces with the same default method. For this to compile successfully, <code>Pickup</code> would need to override the <code>drive</code> method."
  },
  {
    question: "In the JavaBean definition, how would you define a getter method for a boolean, <code>canJump</code>?",
    page: 70,
    answer: "Either<br /><code>public boolean isCanJump() { return canJump; }</code><br />or<br /><code>public boolean getCanJump() { return canJump; }</code>"
  },
  {
    question: "In the JavaBean definition, how would you define a getter method for a Boolean, <code>canJump</code>?",
    page: 70,
    answer: "<code>public Boolean getCanJump() { return canJump; }</code><br /><code>canJump</code> is an object, not a boolean, so it must be prefixed with get"
  },
  {
    question: "What is object composition?",
    page: 74,
    answer: "Combining classes into one another when inheritance/polymorphism doesn't make sense."
  },
  {
    question: "What are the rules for creating an immutable class?",
    page: 82,
    answer: "1. Use a constructor to set all properties.<br />2. Mark all instance variables as private and final.<br />3. Don't define setter methods.<br />4. Don't allow mutable objects to be accessed.<br />5. Prevent methods from being overriden."
  },
  {
    question: "How do you convert an array to a <code>List</code>?",
    page: 105,
    answer: "<code>Arrays.asList(array);</code><br />This returns a fixed size list, backed by the array."
  },
  {
    question: "How do you convert a <code>List</code> to an array?",
    page: 105,
    answer: "<code>list.toArray();</code>"
  },
  {
    question: "What will be the results of the following?:<br /><code>int[] array = new int[]{4,6,1,5,8};</code><br /><code>System.out.println(Arrays.binarySearch(array, 4));</code><br /><code>System.out.println(Arrays.binarySearch(array, 0));</code><br /><code>System.out.println(Arrays.binarySearch(array, 3));</code>",
    page: 106,
    answer: "The results are undefined. The array must be ordered."
  },
  {
    question: "What will be the results of the following?:<br /><code>int[] array = new int[]{4,6,1,5,8};Arrays.sort(array);</code><br /><code>System.out.println(Arrays.binarySearch(array, 4));</code><br /><code>System.out.println(Arrays.binarySearch(array, 0));</code><br /><code>System.out.println(Arrays.binarySearch(array, 3));</code>",
    page: 106,
    answer: "<code>1</code><br /><code>-1</code><br /><code>-2</code>"
  },
  {
    question: "What is type erasure?",
    page: 112,
    answer: "In order to be compatible with older Java versions, generics are actually just stored as <code>Object</code>s and cast at the appropriate time, behind the scenes."
  },
  {
    question: "What are the three ways to implement this interface, and what are the connotations of each?<br /><code>public interface Shippable&lt;T&gt; { void ship(T t); }</code>",
    page: 112,
    answer: "Specify the generic type. In this case, we can only ship <code>String</code>s.<br /><code>class Crate implements Shippable&lt;String&gt; { public void ship(String t) {} }</code><br /><br />Use a generic type. In this manner, we can ship any object of type <code>T</code>.<br /><code>class Crate&lt;T&gt; implements Shippable&lt;T&gt; { public void ship(T t) {} }</code><br /><br />Ignore generic types. This generates a compiler warning as this will accept any <code>Object</code>.<br /><code>class Crate implements Shippable { public void ship(Object o) {} }</code>"
  },
  {
    question: "How can you explicitly state the generic return type when calling a method?",
    page: 114,
    answer: "<code>Box.&lt;String&gt;ship(\"package\");</code><br />This is optional."
  },
  {
    question: "What is the point of unbounded wildcards in generics, and give an example.",
    page: 118,
    answer: "The unbounded wildcard allows any generic.<br /><code>public static void printList(List&lt;?&gt; list) { list.forEach(System.out::println); }</code><br />If this was restricted to <code>List&lt;Object&gt;</code>, trying to call this method with a <code>List&lt;String&gt;</code> would fail to compile."
  },
  {
    question: "What will be the result of the following?<br /><code>Integer[] numbers = { new Integer(42) };</code><br /><code>Object[] objects = numbers;</code><br /><code>objects[0] = \"forty-two\";</code>",
    page: 118,
    answer: "An <code>ArrayStoreException</code> is thrown. Unlike with <code>Collection</code>s, the JVM remembers that <code>objects</code> is really of type <code>Integer</code>."
  },
  {
    question: "What is an upper-bounded wildcard, and how would you define one?",
    page: 119,
    answer: "Similar to an unbounded wildcard, but forcing the type to match or extend the upper bound.<br /><code>public static void sum(List&lt;? extends Number&gt; numbers) { ... }</code><br />This takes any <code>List</code> of <code>Number</code>s or subclasses of <code>Number</code>."
  },
  {
    question: "Why can't you add elements to an unbounded or upper-bounded wildcarded list?",
    page: 120,
    answer: "Java doesn't really know what type of list it has, so it can't enforce the type."
  },
  {
    question: "What are lower-bounded wildcards, why would you use them, and how do you specify one?",
    page: 122,
    answer: "It enforces that the type must be of the same type, or a supertype of the lower bound. It means that objects of the lower bound type are always safe to be added.<br />Example: <code>List&lt;? super String&gt;</code>"
  },
  {
    question: "What does the following <code>List</code> method do?<br /><code>void add(int index, E element)</code>",
    page: 130,
    answer: "Adds the element at the specified index, and moves the rest of the elements towards the end."
  },
  {
    question: "What is the difference between <code>HashSet</code> and <code>TreeSet</code>? What is the big O notation for the addition and finding of elements in each case?",
    page: 132,
    answer: "A <code>TreeSet</code> saves the elements in order. <code>HashSet</code> adds and finds in O(n), while <code>TreeSet</code> does these in O(log(n))"
  },
  {
    question: "What are the four main methods of <code>NavigableSet</code>, and what do they do?",
    page: 134,
    answer: "<code>E lower(E e)</code><br />Returns the greatest element that is &lt; <code>e</code>, or <code>null</code> if none found.<br /><br /><code>E floor(E e)</code><br />Returns the greatest element that is &lt;= <code>e</code>, or <code>null</code> if none found.<br /><br /><code>E ceiling(E e)</code><br />Returns the smallest element that is &gt;= <code>e</code>, or <code>null</code> if none found.<br /><br /><code>E higher(E e)</code><br />Returns the smallest element that is &gt; <code>e</code>, or <code>null</code> if none found."
  },
  {
    question: "What does this method do?<br /><code>boolean ArrayDeque.add(E e)</code>",
    page: 135,
    answer: "Adds an element to the back of the queue, and returns <code>true</code> if successful, or throws an exception"
  },
  {
    question: "What does the following method do?<br /><code>E ArrayDeque.element()</code>",
    page: 135,
    answer: "Returns the next element, or throws an exception if empty queue."
  },
  {
    question: "What does the following method do?<br /><code>boolean ArrayDeque.offer(E e)</code>",
    page: 135,
    answer: "Adds an element to the back of the queue, and returns <code>true</code> if successful or <code>false</code> if not."
  },
  {
    question: "What does the following method do?<br /><code>E ArrayDeque.remove()</code>",
    page: 135,
    answer: "Removes and returns the next element, or throws an exception if empty queue"
  },
  {
    question: "What does the following method do?<br /><code>void ArrayDeque.push(E e)</code>",
    page: 135,
    answer: "Adds an element to the front of the queue"
  },
  {
    question: "What does the following method do?<br /><code>E ArrayDeque.poll()</code>",
    page: 135,
    answer: "Removes and returns the next element or <code>null</code> if empty queue"
  },
  {
    question: "What does the following method do?<br /><code>E ArrayDeque.peek()</code>",
    page: 135,
    answer: "Returns the next element, or <code>null</code> if empty queue"
  },
  {
    question: "What does the following method do?<br /><code>E ArrayDeque.pop()</code>",
    page: 135,
    answer: "Removes and returns the next element, or throws exception if empty queue"
  },
  {
    question: "What are the four map implementations, and how do they differ from one another?",
    page: 138,
    answer: "<code>HashMap</code> - unsorted<br /><code>LinkedHashMap</code> - in order of insertion<br /><code>TreeMap</code> - in logical ordering<br /><code>Hashtable</code> - old, synchronised <code>HashMap</code>"
  },
  {
    question: "What are the return types of the following <code>Map</code> methods?<br /><code>keySet()</code><br /><code>values()</code>",
    page: 139,
    answer: "<code>keySet()</code>: <code>Set&lt;K&gt;</code><br /><code>values()</code>: <code>Collection&lt;V&gt;</code>"
  },
  {
    question: "Which data structures don't allow <code>null</code>s?",
    page: 141,
    answer: "<code>TreeMap</code> (no <code>null</code> keys)<br /><code>Hashtable</code> (no <code>null</code> keys or values)<br /><code>TreeSet</code><br /><code>ArrayDeque</code>"
  },
  {
    question: "What is an <code>ArrayDeque</code>?",
    answer: "A resizable-array implementation of a double-ended queue."
  },
  {
    question: "What is the difference between a <code>Queue</code> and a <code>Stack</code>, and what are the methods called?",
    page: 135,
    answer: "<code>Stack</code>: LIFO, <code>push</code>/<code>pop</code>/<code>peek</code><br /><code>Queue</code>: FIFO, <code>offer</code>/<code>poll</code>/<code>peek</code>"
  },
  {
    question: "What is the order of the elements when <code>TreeMap.values()</code> is called?",
    page: 140,
    answer: "In the order of the corresponding keys (i.e. natural order of the keys)."
  },
  {
    question: "Which Java Collections Framework interface/s does an <code>ArrayList</code> implement?",
    page: 141,
    answer: "<code>List</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does an <code>ArrayDeque</code> implement?",
    page: 141,
    answer: "<code>Queue</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>HashMap</code> implement?",
    page: 141,
    answer: "<code>Map</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>HashSet</code> implement?",
    page: 141,
    answer: "<code>Set</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>Hashtable</code> implement?",
    page: 141,
    answer: "<code>Map</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>LinkedList</code> implement?",
    page: 141,
    answer: "<code>List</code>, <code>Queue</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>Stack</code> implement?",
    page: 141,
    answer: "<code>List</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>TreeMap</code> implement?",
    page: 141,
    answer: "<code>Map</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>TreeSet</code> implement?",
    page: 141,
    answer: "<code>Set</code>"
  },
  {
    question: "Which Java Collections Framework interface/s does a <code>Vector</code> implement?",
    page: 141,
    answer: "<code>List</code>"
  },
  {
    question: "Does <code>ArrayDeque</code> support <code>null</code>s? Why?",
    page: 141,
    answer: "No. <code>null</code> has a special meaning in <code>ArrayDeque</code> methods like <code>poll()</code>."
  },
  {
    question: "When sorting <code>String</code>s, what is the order of these: lowercase letters, uppercase letters, numbers?",
    page: 143,
    answer: "Numbers, uppercase letters, lowercase letters"
  },
  {
    question: "What are the rules when implementing the <code>Comparable</code> interface?",
    page: 144,
    answer: "0 is returned when this object is equal to the provided argument<br />A number &lt; 0 is returned when this object is smaller than the provided argument<br />A number &gt; 0 is returned when this object is larger than the provided argument"
  },
  {
    question: "When is <code>compareTo</code> consistent with <code>equals</code>?",
    page: 146,
    answer: "When <code>compareTo(obj)</code> is <code>0</code> when (and only when) <code>equals(obj)</code> is <code>true</code>"
  },
  {
    question: "Which package is the <code>Comparable</code> interface in?",
    page: 148,
    answer: "<code>java.lang</code>"
  },
  {
    question: "What is the method signature of the <code>Comparable</code> interface method?",
    page: 148,
    answer: "<code>public int compareTo(T t);</code>"
  },
  {
    question: "Which package is the <code>Comparator</code> interface in?",
    page: 148,
    answer: "<code>java.util</code>"
  },
  {
    question: "What is the method signature of the <code>Comparator</code> interface method?",
    page: 148,
    answer: "<code>public int compare(T obj1, T obj2);</code>"
  },
  {
    question: "What are the two primary <code>Collections.sort</code> method signatures?",
    page: 150,
    answer: "<code>public static &lt;T&gt; void sort(List&lt;T&gt; list, Comparator&lt;? super T&gt; c);</code><br /><code>public static &lt;T extends Comparable&lt;? super T&gt;&gt; void sort(List&lt;T&gt; list);</code>"
  },
  {
    question: "Why won't the following snippet compile, and what are the two ways this can be resolved?<br /><code>class Rabbit { int id; }</code><br /><code>...</code><br /><code>Set&lt;Rabbit&gt; rabbits = new TreeSet&lt;&gt;();</code><br /><code>rabbits.add(new Rabbit());</code>",
    page: 151,
    answer: "<code>Rabbit</code> does not implement <code>Comparable</code>, so a <code>ClassCastException</code> will be thrown. This can be resolved by either:<br />1. make the <code>Rabbit</code> class implement <code>Comparable</code>.<br />2. Pass a <code>Comparator</code> to the <code>TreeSet</code> constructor, e.g. <code>new TreeSet&lt;&gt;((rabbit1, rabbit2) -&gt; rabbit1.id - rabbit2.id);</code>"
  },
  {
    question: "What is the method signature of the <code>List.replaceAll</code> method, and what does it do?",
    page: 155,
    answer: "<code>void replaceAll(UnaryOperator&lt;E&gt; o);</code><br />It replaces all elements in the list with the results from the <code>UnaryOperator</code>."
  },
  {
    question: "What is the <code>Map.merge</code>'s method signature, and what does it do?",
    page: 156,
    answer: "<code>V merge(K var1, V var2, BiFunction&lt;? super V, ? super V, ? extends V&gt; var3)</code>;<br />It gets the value for the provided key, and the potential, then passes these both to the <code>BiFunction</code> to see what the value should actually be set to."
  },
  {
    question: "What happens when <code>Map.merge</code> is applied to key such that <code>map.get(key) == null</code>?",
    page: 156,
    answer: "The value for the key is set to the new value passed into the <code>merge</code> method."
  },
  {
    question: "What happens when the <code>BiFunction</code> in the <code>Map.merge</code> returns <code>null</code>?",
    page: 156,
    answer: "The key is removed from the map."
  },
  {
    question: "What is the method signature for the <code>Supplier</code> abstract method?",
    page: 173,
    answer: "<code>public T get()</code>"
  },
  {
    question: "What is the method signature for the <code>Consumer</code> abstract method?",
    page: 173,
    answer: "<code>public T accept(T t)</code>"
  },
  {
    question: "What is the method signature for the <code>Predicate</code> abstract method?",
    page: 173,
    answer: "<code>public boolean test(T t)</code>"
  },
  {
    question: "What is the method signature for the <code>Function</code> abstract method?",
    page: 173,
    answer: "<code>public R apply(T t)</code>"
  },
  {
    question: "What is the method signature for the <code>UnaryOperator</code> abstract method?",
    page: 173,
    answer: "<code>public T apply(T t)</code>"
  },
  {
    question: "What is the difference between a <code>Function</code> and a <code>UnaryOperator</code>?",
    page: 180,
    answer: "A <code>Function</code> can return a different type to the provided argument. In a <code>UnaryOperator</code>, the parameter and return type must be the same."
  },
  {
    question: "How do you create an <code>Optional</code> instance of a specific value?",
    page: 182,
    answer: "<code>Optional.of(value)</code>"
  },
  {
    question: "How do you create an unpopulated <code>Optional</code> instance?",
    page: 182,
    answer: "<code>Optional.empty()</code>"
  },
  {
    question: "How do you check if an <code>Optional</code> is <code>null</code> or not?",
    page: 183,
    answer: "Java 8: <code>optional.isPresent()</code><br />Java 11: <code>optional.isPresent()</code> and <code>optional.isEmpty()</code>"
  },
  {
    question: "How do you retrieve the value from an <code>Optional</code> instance?",
    page: 183,
    answer: "<code>optional.get()</code>"
  },
  {
    question: "What happens when you call <code>get()</code> on an empty <code>Optional</code> instance?",
    page: 183,
    answer: "A <code>NoSuchElementException</code> is thrown."
  },
  {
    question: "What is the easiest way of creating an <code>Optional</code> instance, where the instance is empty if the provided value is <code>null</code>?",
    page: 183,
    answer: "<code>Optional o = Optional.ofNullable(value);</code>"
  },
  {
    question: "How would you specify a piece of code to run if only when <code>optional.isPresent()</code>?",
    page: 184,
    answer: "<code>ifPresent(Consumer c)</code> - This runs the consumer code if the <code>Optional</code> instance is present."
  },
  {
    question: "How would you get the value from an <code>Optional</code> instance, or retrieve a different value if <code>!optional.isPresent()</code>?",
    page: 184,
    answer: "<code>orElse(T other)</code> - this gets the value if present, or the other value passed in if not present"
  },
  {
    question: "How would you get the value from an <code>Optional</code> instance, or use a <code>Supplier</code> to retrieve a different value if <code>!optional.isPresent()</code>?",
    page: 184,
    answer: "<code>orElseGet(Supplier s)</code>"
  },
  {
    question: "How would you throw an exception if <code>!optional.isPresent()</code>?",
    page: 184,
    answer: "<code>orElseThrow(Supplier s)</code>"
  },
  {
    question: "What are the three parts of a stream pipeline?",
    page: 186,
    answer: "1. Source - where the stream comes from.<br />2. Intermediate operations - transforms the stream<br />3. Terminal operation - produces a result. The stream if no longer valid once a terminal operation completes."
  },
  {
    question: "How do you create an empty stream?",
    page: 188,
    answer: "<code>Stream.empty()</code>"
  },
  {
    question: "How do would you determine the number of elements in a stream? What is the method signature?",
    page: 190,
    answer: "<code>public long count()</code>. This returns a <code>long</code>."
  },
  {
    question: "How would you get the min/max elements from a stream? What are the method signatures?",
    page: 191,
    answer: "<code>Optional&lt;T&gt; min(Comparator&lt;? super T&gt; comparator)</code><br /><code>Optional&lt;T&gt; max(Comparator&lt;? super T&gt; comparator)</code>"
  },
  {
    question: "What do the <code>Stream.findFirst</code> and <code>Stream.findAny</code> methods do, and what are their method signatures?",
    page: 191,
    answer: "Both methods return the first element they find, although <code>findFirst</code> forces the stream to retrieve the sequentially first element. <code>findAny</code> is therefore useful for parallel streams.<br /><code>Optional&lt;T&gt; findFirst()</code><br /><code>Optional&lt;T&gt; findAny()</code>"
  },
  {
    question: "What is the only terminal stream operation with a <code>void</code> return type?",
    page: 192,
    answer: "<code>forEach</code>"
  },
  {
    question: "Can you use a for each loop on a stream?",
    page: 193,
    answer: "No"
  },
  {
    question: "What are the three <code>Stream.reduce</code> method signatures, and what do they do?",
    page: 193,
    answer: "The <code>reduce</code> function reduces the stream down to a single element.<br /><br /><code>T reduce(T identity, BinaryOperator&lt;T&gt; accumulator)</code><br /><code>identity</code> is the initial value, and <code>accumulator</code> defines how the elements will be merged.<br /><br /><code>Optional&lt;T&gt; reduce(BinaryOperator&lt;T&gt; accumulator)</code><br />Similar to the previous, except the initial value can be omitted. This will return...:<br />- An empty <code>Optional</code> when the stream is empty<br />- The element, if the stream only contains one element<br />- The accumulated value, if the stream has multiple elements.<br /><br /><code>&lt;U&gt; U reduce(U identity, BiFunction&lt;U, ? super T, U&gt; accumulator, BinaryOperator&lt;U&gt; combiner)</code><br />This is useful in parallel streams as it allows the JVM to create intermediate combined elements, and then combine all of those at the end."
  },
  {
    question: "What is the difference between <code>Stream.reduce</code> and <code>Stream.collect</code>?",
    page: 194,
    answer: "<code>reduce</code> creates new objects at each combining step. <code>collect</code> is a mutable reduction, i.e. the same mutable object is used."
  },
  {
    question: "What are the two different method signatures for the <code>Stream.collect</code> method?",
    page: 195,
    answer: "<code>&lt;R&gt; R collect(Supplier&lt;R&gt; supplier, BiConsumer&lt;R, ? super T&gt; accumulator, BiConsumer&lt;R, R&gt; combiner)</code><br />- The <code>supplier</code> provides the initial value. The <code>accumulator</code> specifies how the elements should be added to the supplied object. The <code>combiner</code> specifies how these objects should be combined. This is useful for parallel streams when combining the results from each thread.<br /><br /><code>&lt;R,A&gt; R collect(Collector&lt;? super T, A, R&gt; collector)</code><br />- Collects with a <code>Collector</code>."
  },
  {
    question: "How would you ensure a <code>Stream</code> contains no two objects such that <code>obj1.equals(obj2)</code>",
    page: 196,
    answer: "<code>stream.distinct()</code>"
  },
  {
    question: "How would you skip the first <code>x</code> values of a <code>Stream</code>?",
    page: 197,
    answer: "<code>stream.skip(x)</code>"
  },
  {
    question: "How would you ensure that a <code>Stream</code> iterates over no more than <code>x</code> elements?",
    page: 197,
    answer: "<code>stream.limit(x)</code>"
  },
  {
    question: "What does the <code>Stream.flatMap</code> method do, and how would you use it?",
    page: 198,
    answer: "Combines the elements contained within each stream element into one stream, e.g. when combining the elements of a stream of <code>List</code>s.<br />To use the method, you must supply a <code>Function</code> that takes the current type and returns a <code>Stream</code>"
  },
  {
    question: "How do you order the elements of a <code>Stream</code>, and what are the method signatures?",
    page: 198,
    answer: "<code>Stream&lt;T&gt; sorted()</code> - uses the <code>Comparable</code> interface.<br /><code>Stream.sorted(Comparator&lt;? super T&gt; comparator)</code> - uses the provided <code>Comparator</code>"
  },
  {
    question: "What does the <code>Stream.peek</code> method do?",
    page: 199,
    answer: "This is very similar to the <code>Stream.forEach</code> method, but is an intermediate operation. It allows us to inspect the elements of the stream without changing the stream."
  },
  {
    question: "What are some benefits you can gain from using a primitive stream as opposed to an object stream with the wrapper type?",
    page: 205,
    answer: "The primitive streams have additional methods that are useful for statistical analysis, e.g. <code>max()</code> and <code>avg()</code>"
  },
  {
    question: "How would you generate an infinite stream of random <code>double</code> primitives using the <code>Math.random()</code> method?",
    page: 206,
    answer: "<code>DoubleStream.generate(Math::random)</code>"
  },
  {
    question: "How would you generate an infinite stream of <code>double</code> primitives, starting at 0.5 and progressively halving in size?",
    page: 206,
    answer: "<code>DoubleStream.iterate(0.5, d -&gt; d / 2)</code>"
  },
  {
    question: "What are the two methods to create a stream of <code>int</code> primitives?",
    page: 207,
    answer: "<code>IntStream.range(x, y)</code><br />Creates a stream starting from <code>x</code> and counting to <code>y-1</code><br /><br /><code>IntStream.rangeClosed(x, y)</code><br />Creates a stream starting from <code>x</code> and counting to <code>y</code> (inclusive)"
  },
  {
    question: "What methods would you use to convert a <code>Stream&lt;?&gt;</code>, <code>s</code> to a primitive stream?",
    page: 207,
    answer: "<code>s.toMapToInt</code>, <code>s.mapToLong</code>, <code>s.mapToDouble</code>"
  },
  {
    question: "How would you convert a primitive stream, <code>s</code>, to an object stream?",
    page: 207,
    answer: "<code>s.mapToObj</code>"
  },
  {
    question: "What is the difference in method calls from an <code>Optional&lt;Double&gt;</code> and an <code>OptionalDouble</code>?",
    page: 208,
    answer: "<code>Optional&lt;Double&gt;</code>: <code>get()</code><br /><code>OptionalDouble</code>: <code>getAsDouble()</code>"
  },
  {
    question: "What are the return type for the following methods on <code>IntStream</code>?:<br /><code>max()</code><br /><code>sum()</code><br /><code>avg()</code>",
    page: 209,
    answer: "<code>max()</code>: <code>OptionalInt</code><br /><code>sum()</code>: <code>int</code><br /><code>avg()</code>: <code>OptionalInt</code>"
  },
  {
    question: "How would you get the range from an <code>IntStream</code>?",
    page: 210,
    answer: "Use <code>IntSummaryStatistics</code>, i.e.:<br /><code>IntSummaryStatistics stats = intStream.summaryStatistics();</code><br /><code>int range = stats.getMax() - stats.getMin();</code>"
  },
  {
    question: "How can you create a function that maps to an <code>int</code> primitive, and what is the equivalent of the <code>apply</code> method called?",
    page: 212,
    answer: "<code>ToIntFunction</code>, <code>applyAsInt()</code>"
  }
];