URN lookup
==========

A general purpose URN resolver. Instead of translating URNs into HTTP URLs to contact the resolver, I think we should use Gopher, but in a way similar to how DNS resolves domain names. (Plus you have to love the pun: Gopher is our URN gofer.)

For known URN schemes, we can redirect the client to the appropriate HTTP URN resolver.

For unknown URN schemes, like the DNS, we should ask another Gopher URN resolver.

## References
* Wikipedia
 * [URI](http://en.wikipedia.org/wiki/URI)
* [URI Scheme](http://en.wikipedia.org/wiki/URI_scheme)
 * [URN](http://en.wikipedia.org/wiki/Uniform_resource_name)
 * [info:](http://en.wikipedia.org/wiki/Info_URI_scheme)
 * [Digital Object Identifier](http://en.wikipedia.org/wiki/Digital_object_identifier)
* URN Resolver
 * [DNS as a URN Resolver](http://stackoverflow.com/questions/5476121/using-dns-as-a-urn-resolver)
 * [Finnish URN Resolver](http://www.nationallibrary.fi/publishers/urn.html)
