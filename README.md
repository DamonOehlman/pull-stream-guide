# A Guide to Pull-Streams

This is a guide that walks through the general process of using [dominictarr's](https://github.com/dominictarr) [`pull-stream`](https://github.com/dominictarr/pull-stream) module.  The guide attempts to cover the following areas:

- How to use pull-streams in a way similar to node streams
- How to bridge between pull-streams and node streams
- How to express application control flow using pull-streams

## A General Introduction to Pull Streams

The `pull-stream` module provides a functional approach to working with streams.  This is largely only apparent when you start looking at modules that provide `pull-stream` compatible Sources, Sinks and Throughs.  For this reason, the `pull-stream` module adds much less weight when [browserified](https://github.com/substack/node-browserify) for execution within the browser environment.

## Piping using Pull Streams

While you can use a `pipe` function as per traditional streams when working with pull streams, I would recommend using in the following way:

<<(examples/source-and-sink.js)
